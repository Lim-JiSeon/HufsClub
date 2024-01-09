import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import clubRouter from './routes/clubRoutes.js';
import userRouter from './routes/userRoutes.js';
import cors from 'cors';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: ['http://localhost:5000', 'http://localhost:3000', 'https://hufs-club.vercel.app'] }));
app.use('/api/users', userRouter);
app.use('/api/clubs', clubRouter);
app.get('/test', (req, res) => {
  res.send("Hello World!");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});
