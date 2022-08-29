import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export default {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || 'development',
  secretKey: process.env.SECRET_KEY || 'MY_SECRET_KEY',
  databaseUri:
    process.env.DATABASE_URI || 'mongodb://localhost:27017/juexue-dao-app',
}
