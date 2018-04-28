const router = require('express').Router()

module.exports = (app) => {
  app.use('/example', router )

  router.get('/', (req, res) => {
    res.json('Success').status(200)
  })
}