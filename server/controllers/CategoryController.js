const Category = require('../model/Category')
const { v4: uuidv4 } = require("uuid")

const CategoryController = {
  create: async (req, res) => {
    try {
      let opt = {
        ...req.body,
        sid: uuidv4()
      }
      await Category.create(opt)
      return res.json({
        errorCode: 0,
        errorMsg: "Success",
      })
    } catch (error) {
      console.log("CategoryController", error)
      res.error()
    }
  },
  find: async (req, res) => {
    try {
      let { queryInput } = req.body
      let stories = await Category.find(queryInput)
      if (!stories.length) return res.json({ errorCode: 1, errorMsg: "No data" })
      return res.json({
        errorCode: 0,
        errorMsg: "Success",
        data: stories
      });
    } catch (error) {
      console.log("CategoryController", error)
      res.error()
    }
  }
}

module.exports = CategoryController