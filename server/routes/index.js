const storyRoute = require('./story')
const authorRoute = require('./author')
const categoryRoute = require('./category')
const chapRoute = require('./chap')
const authRoute = require('./auth')

const routes = (app) => {
  app.get('/', (req, res) => {
    res.json({
      errorCode: 0,
      errorMessage: 'Success'
    })
  });

  app.use('/api/v1/auth', authRoute)
  app.use('/api/v1/stories', storyRoute)
  app.use('/api/v1/author', authorRoute)
  app.use('/api/v1/category', categoryRoute)
  app.use('/api/v1/chap', chapRoute)
}

module.exports = routes;
