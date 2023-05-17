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
  }, 
  find: async (req, res) => {
    try {
      let { queryInput } = req.body
      let authors = await Author.find(queryInput)
      if (!authors.length) return res.json({ errorCode: 1, errorMsg: "No data" })
      return res.json({
        errorCode: 0,
        errorMsg: "Success",
        data: authors
      });
    } catch (error) {
      console.log("AuthorController", error)
      res.error()
    }
  }
}

module.exports = AuthorController