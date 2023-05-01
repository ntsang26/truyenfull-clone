const storyRoute = require('./story')
const authorRoute = require('./author')
const categoryRoute = require('./category')
const chapRoute = require('./chap')

const routes = (app) => {
  app.get('/', (req, res) => {
    res.json({
      errorCode: 0,
      errorMessage: 'Success'
    })
  });

  app.use('/stories', storyRoute)
  app.use('/author', authorRoute)
  app.use('/category', categoryRoute)
  app.use('/chap', chapRoute)
}

module.exports = routes;
