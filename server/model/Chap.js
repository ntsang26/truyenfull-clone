const mongoose = require('mongoose')
const { Schema } = mongoose

const chapSchema = new Schema({
  sid: String,
  storyId: String,
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports= mongoose.model('Chap', chapSchema)
