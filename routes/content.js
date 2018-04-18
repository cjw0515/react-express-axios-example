import express from 'express';
import Post from '../models/post';

const router = express.Router();

router.post('/', (req, res) => {
  if(typeof req.body.body !== 'string'){
    return res.status(400).json({
      error: "empty contents",
    })
  }

  let post = new Post({
    name: req.body.name,
    body: req.body.body
  });

  post.save( err => {
    if(err) throw err;
    return res.json({success: true});
  });
})

router.get('/', (req, res) => {
  Post.find()
  .sort({"_id": -1})
  .exec((err, posts) => {
    if(err) throw err;
    res.json(posts);
  })
})

export default router;
