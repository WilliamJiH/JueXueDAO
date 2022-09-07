import { UploadedFile } from 'express-fileupload'
import fs from 'fs'

const ASSET_FILE_PATH = '/../../temp_files/'

/**
 * Manage assets that can be stored locally or on cloud.
 */
export class FileStorageService {
  static getFilePath(
    file: UploadedFile,
    dirPath: string = __dirname + ASSET_FILE_PATH
  ) {
    return dirPath + file.name
  }

  /**
   * Store a file to disk.
   * @param file
   * @param dirPath
   * @returns
   */
  static async storeUploadedFile(
    file: UploadedFile,
    dirPath: string = __dirname + ASSET_FILE_PATH
  ) {
    const path = dirPath + file.name
    await file.mv(path)
    console.log(`💾 Stored file ${file.name} to ${path}`)
    return path
  }

  /**
   * Remove a file from disk.
   * @param path
   */
  static removeStoredFile(path: string) {
    fs.unlink(path, (err) => {
      if (err) {
        console.error(`🪲 Error removing file: `, err)
      } else {
        console.log(`❌💾 Removed stored file ${path}`)
      }
    })
  }
}

export default new FileStorageService()
