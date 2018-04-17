import express from 'express';
import Post from '../models/post'
import mongoose from 'mongoose';

const router = express.Router();

/*
router.post('/', (req, res) => {
  return res.send('test');
})
*/
router.post('/', (req, res) => {

  if(typeof req.body.contents !== 'string'){
    return res.status(400).json({
      error: "empty contents",
      code: 2
    })
  }

  let post = new Post({
    title: '제목',
    writer: '글쓴잉ㅇㅇ',
    contents: '하하하안녕하십니가',
    views: 4
  });

  post.save( err => {
    if(err) throw err;
    return res.json({ success: true });
  });
});


router.get('/', (req, res) => {
  Post.find()
  .sort({"_id": -1})
  .limit(10)
  .exec((err, posts) => {
      if(err) throw err;
      res.json(posts);
  })
})

export default router;
