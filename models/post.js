import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Post = new Schema({
  title: String,
  writer: String,
  contents: String,
  views: Number,
  date: {
//    created: { type: Date, default: Date.now},
//    edited: {type: Date, default: Date.now}
  }
});

export default mongoose.model('Post', Post);
