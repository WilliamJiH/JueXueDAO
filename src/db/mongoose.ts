/* This module will hold our connection to
   our mongo server through the Mongoose API.
   We will access the connection in our express server. */
import mongoose from 'mongoose'
import configs from '@configs'

/* Connnect to our database */
const mongoURI = configs.databaseUri
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('Connected to database.', mongoURI)
  })
  .catch((error) => {
    console.error(error)
    console.error('Error connecting to mongodb. Timeout reached.')
  })

export default mongoose
