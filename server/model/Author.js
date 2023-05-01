const mongoose = require('mongoose')
const { Schema } = mongoose

const authorSchema = new Schema({
  sid: String,
  name: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports= mongoose.model('Author', authorSchema)
