const storyRoute = require('./story')

const routes = (app) => {
  app.get('/', (req, res) => {
    res.json({
      errorCode: 0,
      errorMessage: 'Success'
    })
  });

  app.use('/stories', storyRoute)
}

module.exports = routes;
