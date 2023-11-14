import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Club from '../models/clubModel.js';
import { isAuth, isAdmin, isPresidentOrAdmin } from '../utili.js';

const clubRouter = express.Router();

//전체 동아리 조회
clubRouter.get('/', async (req, res) => {
  const clubs = await Club.find();
  res.send(clubs);
});

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
  const { keyword } = req.query;
  let clubs = [];
  if (keyword) {
    clubs = await Club.find({
      name: {
        $regex: new RegExp(keyword, "i"),
      },
    });
  }
  res.send(clubs);
});

//동아리 주제 검색
clubRouter.get('/search/topic', async (req, res) => {
  const { keyword } = req.query;
  let clubs = [];
  if (keyword) {
    clubs = await Club.find({
      topic: {
        $regex: new RegExp(keyword, "i"),
      },
    });
  }
  res.send(clubs);
}); 

//동아리 활동 검색
clubRouter.get('/search/activity', async (req, res) => {
  const { keyword } = req.query;
  let clubs = [];
  if (keyword) {
    clubs = await Club.find({
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
    if (user.isAdmin && !user.isPresident) { //관리자이면서 동아리 회장이 아닌 경우
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

//동아리 글 작성
clubRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    const newClub = new Club({
      name: (user.isAdmin)? req.body.name : user.isPresident, 
      field: req.body.field,
      topic: (req.body.topic)? Club.formatHashtags(req.body.topic) : req.body.topic,
      executive: req.body.executive,
      activity: req.body.activity,
      recruit: req.body.recruit,
      room: req.body.room,
      logoUrl: req.body.logoUrl,
    });
    const club = await newClub.save();
    res.send({ message: 'Club Created', club });
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
/*
//동아리 글 삭제(사용자의 like에서도 삭제되어야 함.)
clubRouter.delete(
  '/:id',
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const club = await Club.findById(req.params.id);
    if (club) {
      await club.remove();
      res.send({ message: 'Club Deleted' });
    } else {
      res.status(404).send({ message: 'Club Not Found' });
    }
  })
);
*/

export default clubRouter;
