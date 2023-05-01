const Author = require('../model/Author')
const { v4: uuidv4 } = require("uuid")

const AuthorController = {
  create: async (req, res) => {
    try {
      let opt = {
        ...req.body,
        sid: uuidv4()
      }
      await Author.create(opt)
      return res.json({
        errorCode: 0,
        errorMsg: "Success",
      })
    } catch (error) {
      console.log("AuthorController", error)
      res.error()
    }
  }
}

module.exports = AuthorController