/* This module will hold our connection to
   our mongo server through the Mongoose API.
   We will access the connection in our express server. */
const mongoose = require('mongoose')
const config = require('../../configs/index')

/* Connnect to our database */
const mongoURI = config.databaseUri
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database.', mongoURI)
  })
  .catch((error) => {
    console.error(error)
    console.error('Error connecting to mongodb. Timeout reached.')
  })

module.exports = { mongoose } // Export the active connection.
