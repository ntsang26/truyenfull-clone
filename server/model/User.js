const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  sid: String,
  name: String,
  username: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports= mongoose.model('User', userSchema)
