import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

console.log(`Loading config for ${process.env.APP_NAME}...`)

export default {
  port: process.env.PORT || 5000,
  appName: process.env.APP_NAME,
  env: process.env.NODE_ENV || 'development',
  secretKey: process.env.SECRET_KEY || 'MY_SECRET_KEY',
  databaseUri:
    process.env.DATABASE_URI || 'mongodb://localhost:27017/juexue-dao-app',

  nftStorageApiKey: process.env.NFT_STORAGE_API_KEY || '',
}
