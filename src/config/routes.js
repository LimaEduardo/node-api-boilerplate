const runDB = require('./db.js')
const router = require('express').Router()
const example = require('../controllers/example')


runDB(db => {
  example(router, db)
})

module.exports = router