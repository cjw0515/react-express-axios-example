import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Post = new Schema({
  name: String,
  body: String,  
});

export default mongoose.model('Post', Post);
