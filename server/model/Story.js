const mongoose = require('mongoose')
const { Schema } = mongoose

const storySchema = new Schema({
  sid: String,
  authorId: String,
  categoryId: String,
  title: String,
  image: String,
  desc: String,
  favorites: Number,
  chaps: Number,
  status: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports= mongoose.model('Story', storySchema)
