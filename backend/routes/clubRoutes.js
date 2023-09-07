import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Club from '../models/clubModel.js';
import { isAuth, isAdmin } from '../utili.js';

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
      activity: {
        $regex: new RegExp(keyword, "i"),
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

//동아리 글 작성
//동아리 글 수정
//동아리 글 삭제(사용자의 like에서도 삭제되어야 함.)
/*
clubRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const newClub = new Club({
      name: 'sample name ' + Date.now(),
      slug: 'sample-name-' + Date.now(),
      image: '/images/p1.jpg',
      price: 0,
      category: 'sample category',
      brand: 'sample brand',
      countInStock: 0,
      rating: 0,
      numReviews: 0,
      description: 'sample description',
    });
    const club = await newClub.save();
    res.send({ message: 'Club Created', club });
  })
);

clubRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const clubId = req.params.id;
    const club = await Club.findById(clubId);
    if (club) {
      club.name = req.body.name;
      club.slug = req.body.slug;
      club.price = req.body.price;
      club.image = req.body.image;
      club.images = req.body.images;
      club.category = req.body.category;
      club.brand = req.body.brand;
      club.countInStock = req.body.countInStock;
      club.description = req.body.description;
      await club.save();
      res.send({ message: 'Club Updated' });
    } else {
      res.status(404).send({ message: 'Club Not Found' });
    }
  })
);

clubRouter.delete(
  '/:id',
  isAuth,
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
