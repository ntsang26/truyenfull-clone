const User = require('../model/User')

const AuthController = {
  login: async (req, res) => {
    try {
      let { username, password } = req.body
      let user = await User.findOne({ username })
      if (!user) return res.json({ errorCode: 1, errorMsg: "User not exists!" })
      let check = user.password === password
      if (!check) return res.json({ errorCode: 1, errorMsg: "Password not match!" })
      return res.json({ errorCode: 0, errorMsg: "Success", data: { user, token: process.env.JWT_SECRET } })
    } catch (error) {
      console.log("AuthController", error)
      res.error()
    }
  },
  // create: async (req, res) => {
  //   try {
  //     let { username, password } = req.body
  //     let user = await User.findOne({ username })
  //     if (user) return res.json({ errorCode: 1, errorMsg: "User already exist!" })
  //     let data = await User.create({
  //       name: username,
  //       username,
  //       password
  //     })
  //     return res.json({ errorCode: 0, errorMsg: "Success", data })
  //   } catch (error) {
  //     console.log("AuthController", error)
  //     res.error()
  //   }
  // },
}

module.exports = AuthController