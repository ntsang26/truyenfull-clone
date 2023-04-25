const mongoose = require('mongoose')
const { Schema } = mongoose

const storySchema = new Schema({
  title: String,
  author: String,
  content: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

module.exports= mongoose.model('Story', storySchema)
