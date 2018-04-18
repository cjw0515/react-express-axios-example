import express from 'express';
import Post from '../models/post';

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
})

router.get('/', (req, res) => {
  res.send(
    [
      {
        name: '최종원',
        body: '내요요요용용',
      },
      {
        name: '홍길동',
        body: '내요요요용용',
      }
    ]
  )
})

export default router;
