import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Club from '../models/clubModel.js';
import upload from './imageUploader.js';
import { isAuth } from '../utili.js';
import bodyParser from 'body-parser';

const clubRouter = express.Router();

function isEmptyObject(obj) {
  return JSON.stringify(obj) === '[]';
}
//분야별 동아리 조회
clubRouter.get('/field/:field', async (req, res) => {
  const clubs = await Club.find({ field: req.params.field });
  if (isEmptyObject(clubs)) {
    res.status(404).send({ message: 'Clubs Not Found' });
  } else {
    res.send(clubs);
  }
});

//동아리명 검색
clubRouter.get('/search', async (req, res) => {
  const { field, keyword } = req.query;
  let clubs = [];
  if (keyword) {
    clubs = await Club.find({
      field: field,
      name: {
        $regex: new RegExp(keyword, "i"),
      },
    });
  }
  res.send(clubs);
});

//동아리 주제 검색
clubRouter.get('/search/topic', async (req, res) => {
  const { field, keyword } = req.query;
  let clubs = [];
  if (keyword) {
    clubs = await Club.find({
      field: field,
      topic: {
        $regex: new RegExp(keyword, "i"),
      },
    });
  }
  res.send(clubs);
}); 

//동아리 활동 검색
clubRouter.get('/search/activity', async (req, res) => {
  const { field, keyword } = req.query;
  let clubs = [];
  if (keyword) {
    clubs = await Club.find({
      field: field,
      'activity.text': { $regex: new RegExp(keyword, "i"),
      },
    });
  }
  res.send(clubs);
});

//특정 동아리 조회
clubRouter.get('/:id', async (req, res) => {
  const club = await Club.findById(req.params.id);
  if (club) {
    res.send(club);
  } else {
    res.status(404).send({ message: 'Club Not Found' });
  }
});

//동아리 글 중복 검사
clubRouter.get(
  '/write/check', 
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user.isAdmin && !user.isPresident) { //관리자이면서 동아리 운영진이 아닌 경우
      res.send({ message: 'Admin User' });
    } else {
      const club = await Club.find({ name: user.isPresident });
      if(club.length !== 0){
        res.status(404).send({ message: 'Club Already Exists' });
      } else {
        res.send({ message: 'New Writing Available' });
      }
    }
  })
);

clubRouter.post(
  '/upload',
  upload.single('image'),
  (req, res) => {
      res.send("success!");
  }
);

//동아리 글 작성
clubRouter.post(
  '/',
  isAuth,
  upload.fields([ { name: 'logo', limits: 1 }, {name: 'activityImage1', limits: 1 }, {name: 'activityImage2', limits: 1 }, {name: 'activityImage3', limits: 1 }, {name: 'activityImage4', limits: 1 } ]),
  expressAsyncHandler(async (req, res) => {
    const executiveName = req.body.executiveName.split(',');
    const executiveEmail = req.body.executiveEmail.split(',');
    const executiveRole = req.body.executiveRole.split(',');
    const activityText = req.body.activityText.split(',');
    const recruit = req.body.recruit.split(',');

    const user = await User.findById(req.user._id);
    const newClub = new Club({
      name: (user.isAdmin)? req.body.name : user.isPresident, 
      field: req.body.field,
      topic: (req.body.topic)? Club.formatHashtags(req.body.topic) : req.body.topic,
      executive: [
        { name: executiveName[0], email: executiveEmail[0], role: executiveRole[0] },
        { name: executiveName[1], email: executiveEmail[1], role: executiveRole[1] },
        { name: executiveName[2], email: executiveEmail[2], role: executiveRole[2] },
        { name: executiveName[3], email: executiveEmail[3], role: executiveRole[3] },
      ],
      activity: [
        { imageUrl: req.files.activityImage1 ? req.files.activityImage1[0].location : '', text: activityText[0] },
        { imageUrl: req.files.activityImage2 ? req.files.activityImage2[0].location : '', text: activityText[1] },
        { imageUrl: req.files.activityImage3 ? req.files.activityImage3[0].location : '', text: activityText[2] },
        { imageUrl: req.files.activityImage4 ? req.files.activityImage4[0].location : '', text: activityText[3] },
      ],
      recruit: { period: recruit[0], way: recruit[1], num: recruit[2], applyUrl: recruit[3] },
      room: req.body.room,
      logoUrl: req.files.logo ? req.files.logo[0].location : '',
    });
    await newClub.save();
    res.send(newClub);
  })
);

//동아리 글 수정
clubRouter.put(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    const clubId = req.params.id;
    const club = await Club.findById(clubId);
    if (club) {
      if (user.isAdmin || user.isPresident === club.name) {
        club.name = ((user.isAdmin)? req.body.name : user.isPresident) || club.name, 
        club.field = req.body.field || club.field,
        club.topic = (req.body.topic)? Club.formatHashtags(req.body.topic) : req.body.topic,
        club.executive = req.body.executive,
        club.activity = req.body.activity,
        club.recruit = req.body.recruit,
        club.room = req.body.room,
        club.logoUrl = req.body.logoUrl,
        await club.save();
        res.send({ message: 'Club Updated', club });
      } else {
        res.status(404).send( { message: 'Neither President of this club nor Admin' });
      }
    } else {
      res.status(404).send({ message: 'Club Not Found' });
    }
  })
);

//동아리 글 삭제(사용자의 좋아요 목록에서도 삭제)
clubRouter.delete(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const club = await Club.findById(req.params.id);
    if (club) {
      try {
        // 모든 사용자의 like 배열에서 해당 동아리를 삭제합니다.
        await User.updateMany(
          { like: club.name },
          { $pull: { like: club.name } }
        );
        //동아리 삭제
        await Club.findByIdAndDelete(req.params.id);
        res.send({ message: 'Club Deleted' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
    } else {
      res.status(404).send({ message: 'Club Not Found' });
    }
  })
);

export default clubRouter;