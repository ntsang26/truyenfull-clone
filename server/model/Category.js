const mongoose = require('mongoose')
const { Schema } = mongoose

const categorySchema = new Schema({
  sid: String,
  name: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports= mongoose.model('Category', categorySchema)
