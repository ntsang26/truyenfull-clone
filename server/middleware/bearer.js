module.exports = async (req, res, next) => {
  try {
    const authorHeader = req.headers['authorization'] || ""
    const accessToken = authorHeader.split(' ')[1]
    if (accessToken) {
      if (accessToken === process.env.JWT_SECRET) return next()
      else return res.status(403).end()
    } else {
      return res.status(403).end()
    }
  } catch (error) {
    console.log("bearer", error)
    res.status(403).end()
  }
}
