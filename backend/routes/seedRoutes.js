import express from 'express';
import Club from '../models/clubModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
    const createdClubs = await Club.insertMany(data.clubs);
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdClubs, createdUsers });
  });

export default seedRouter;