const Story = require('../model/Story')

const StoryController = {
  list: async (req, res) => {
    try {
      let stories = await Story.find()
      if (!stories) res.json({ errorCode: 1, errorMsg: "Not found" })
      return res.json({
        errorCode: 0,
        errorMsg: "Success",
        data: stories
      });
    } catch (error) {
      console.log("StoryController", error)
      res.error()
    }
  },
  create: async (req, res) => {
    try {
      await Story.create({ ...req.body })
      return res.json({
        errorCode: 0,
        errorMsg: "Success",
      })
    } catch (error) {
      console.log("StoryController", error)
      res.error()
    }
  }
}

module.exports = StoryController