import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

router.post('/', (req, res) => {
  return res.send('test');
})

export default router;
