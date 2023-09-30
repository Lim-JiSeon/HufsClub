import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import Club from '../models/clubModel.js';
import { isAuth, isAdmin, isPresident, generateToken, baseUrl } from '../utili.js';
import nodemailer from 'nodemailer';
import Randomstring from 'randomstring';

const userRouter = express.Router();

//좋아요 삭제

//회원가입
userRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      studentId: req.body.studentId,
      major: req.body.major,
      password: bcrypt.hashSync(req.body.password),
      isEnroll: req.body.isEnroll,
      isPresident: req.body.isPresident,
    });
    const user = await newUser.save();
    res.send({
      _id: user._id,
      username: user.username,
      email: user.email,
      studentId: user.studentId,
      major: user.major,
      isEnroll: user.isEnroll,
      isPresident: user.isPresident,
      isAdmin: user.isAdmin,
      token: generateToken(user),
    });
  })
);

//로그인
userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const { studentId, password } = req.body;
    const signinUser = await User.findOne({ studentId });
    if (!signinUser) {
      res.status(400).send({ errorMessage: 'Wrong studentId' });
    }
    const ok = bcrypt.compareSync(password, signinUser.password);
    if (!ok) {
      res.status(400).send({ errorMessage: 'Wrong password' });
    } else {
      //아이디와 패스워드 모두 일치할 경우
      res.send({
        _id: signinUser._id,
        username: signinUser.username,
        email: signinUser.email,
        studentId: signinUser.studentId,
        major: signinUser.major,
        major2: signinUser.major2,
        isEnroll: signinUser.isEnroll,
        isPresident: signinUser.isPresident,
        isAdmin: signinUser.isAdmin,
        token: generateToken(signinUser),
      });
      return;
    }
  })
);

//로그아웃 
userRouter.get(
  '/logout',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    await User.findOneAndUpdate({_id: req.user._id}, {token:""});
    res.status(200).send({ success: true });
  })
)

//모든 사용자 정보 조회(관리자용)
userRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  })
);

//특정 사용자 정보 조회(관리자용)
userRouter.get(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

//정보수정-사용자 정보 조회
userRouter.get('/info/:id', async (req, res) => {
  const userId = req.params.id; //데이터베이스 아이디
  try {
    const user = await User.findById(userId);
    //좋아요한 동아리 정보 찾아서 보내기(name, logoUrl, topic)
    let likes = [];
    var i = 0;
    for (i = 0; i < user.like.length; i++) {
      const club = await Club.find({ name: user.like[i] });
      if (club) {
        likes.push(club);
      } 
    }
    res.send({
      _id: user.id,
      username: user.username,
      email: user.email,
      studentId: user.studentId,
      major: user.major,
      major2: user.major2,
      isEnroll: user.isEnroll,
      likes,
      token: generateToken(user),
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

//정보수정-새로운 정보 업데이트(좋아요 제외, 좋아요는 동아리 글 상세페이지에서 수정)
userRouter.put(
  '/profile',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.username = req.body.username || user.username;
      user.studentId = req.body.studentId || user.studentId; 
      user.major = req.body.major || user.major;
      user.major2 = req.body.major2;
      user.email = req.body.email || user.email;
      user.isEnroll = req.body.isEnroll || user.isEnroll;
      user.isPresident = req.body.isPresident;
      if (req.body.password) { 
        //기존 비밀번호 일치 여부 확인
        if (bcrypt.compareSync(req.body.password, user.password)) {
          user.password = bcrypt.hashSync(req.body.newPassword);
        } else { //기존 비밀번호 불일치
          return res.status(404).send({ message: 'Invalid existing password' });
        }
      }

      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        studentId: updatedUser.studentId,
        major: updatedUser.major,
        major2: updatedUser.major2,
        isEnroll: updatedUser.isEnroll,
        isPresident: updatedUser.isPresident,
        isAdmin: updatedUser.isAdmin,
        like: updatedUser.like,
        token: generateToken(updatedUser),
      });
    } else {
      return res.status(404).send({ message: 'User not found' });
    }
  })
);

//아이디 찾기(메일 전송)
userRouter.post(
  '/forget-id',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ username: req.body.username, email: req.body.email });
    if (user) {
      // 무작위 인증번호 생성
      const verificationCode = Randomstring.generate(6); // 6자리 무작위 문자열 생성

      user.verificationCode = verificationCode;
      await user.save();

      const transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.GOOGLE_ACCOUNT,
          pass: process.env.APP_PASSWORD,
        },
      });
      
      const message = {
        from: 'HufsClub <process.env.GOOGLE_ACCOUNT>', // 보내는 이메일 주소
        to: `${user.username} <${user.email}>`,        // 받는 이메일 주소
        subject: `ID Finding Verification Code`,       // 이메일 제목
        text: `인증번호: ${verificationCode}`,         // 이메일 내용
      };
       
      transport.sendMail(message, (err, info) => {
        if (err) {
          console.error("err", err);
          return;
        }
        console.log("ok", info);
      });
      res.send({ message: 'We sent verification code to your email.' });
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  })
);

//아이디 확인(인증번호 확인)
userRouter.post(
  '/verify-verification-code',
  expressAsyncHandler(async (req, res) => {
    // 이메일을 기반으로 사용자를 찾습니다.
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).send({ message: '사용자를 찾을 수 없습니다.' });
    }

    // 인증번호를 확인합니다.
    if (req.body.verificationCode !== user.verificationCode) {
      return res.status(400).send({ message: '인증번호가 올바르지 않습니다.' });
    }

    // 올바른 인증번호인 경우 아이디 반환
    res.status(200).send({ message: '아이디 찾기 성공', studentId: user.studentId });
  })
);

//비밀번호 찾기(메일 전송)
userRouter.post(
  '/forget-password',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '3h',
      });
      user.resetToken = token;
      await user.save();

      //reset link
      console.log(`${baseUrl()}/reset-password/${token}`);

      const transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.GOOGLE_ACCOUNT,
          pass: process.env.APP_PASSWORD,
        },
      });
      
      const message = {
        from: 'HufsClub <process.env.GOOGLE_ACCOUNT>',
        to: `${user.username} <${user.email}>`,
        subject: `Reset Password`,
        html: ` 
          <p>Please Click the following link to reset your password:</p> 
          <a href="${baseUrl()}/reset-password/${token}"}>Reset Password</a>
        `,
      };
       
      transport.sendMail(message, (err, info) => {
        if (err) {
          console.error("err", err);
          return;
        }
        console.log("ok", info);
      });
      res.send({ message: 'We sent reset password link to your email.' });
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  })
);

//비밀번호 찾기(새 비밀번호 입력)
userRouter.post(
  '/reset-password',
  expressAsyncHandler(async (req, res) => {
    jwt.verify(req.body.token, process.env.JWT_SECRET, async (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Invalid Token' });
      } else {
        const user = await User.findOne({ resetToken: req.body.token });
        if (user) {
          if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password);
            await user.save();
            res.send({
              message: 'Password reseted successfully',
            });
          }
        } else {
          res.status(404).send({ message: 'User not found' });
        }
      }
    });
  })
);


//좋아요 추가
userRouter.put(
  '/like',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.like.push(req.body.like);
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        studentId: updatedUser.studentId,
        major: updatedUser.major,
        major2: updatedUser.major2,
        isEnroll: updatedUser.isEnroll,
        isPresident: updatedUser.isPresident,
        isAdmin: updatedUser.isAdmin,
        like: updatedUser.like,
        token: generateToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  })
);

//사용자 정보 수정(관리자용)
userRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      user.studentId = req.body.studentId || user.studentId; //아이디로 사용
      user.major = req.body.major || user.major;
      user.major2 = req.body.major2 || user.major2;
      user.isEnroll = req.body.isEnroll || user.isEnroll;
      user.isPresident = req.body.isPresident || user.isPresident;
      user.isAdmin = Boolean(req.body.isAdmin);
      const updatedUser = await user.save();
      res.send({ message: 'User Updated', user: updatedUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

//사용자 삭제(관리자용)
userRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      if (user.isAdmin) {
        res.status(400).send({ message: 'Can Not Delete Admin User' });
        return;
      }
      await user.remove();
      res.send({ message: 'User Deleted' });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

export default userRouter;