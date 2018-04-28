const mongoose = require('mongoose')

const { DB_HOST, DB_PORT, DB_NAME } = process.env

const mongoURI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

mongoose.Promise = global.Promise

module.exports = callback => {
  let db = mongoose.connect(mongoURI).then(() => {
    console.log('Connected to database.')
  }, (e) => {
    console.log(`An error has ocurred: ${e}`)
  })
  callback(db)
}