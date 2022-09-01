import { UploadedFile } from 'express-fileupload'

const ASSET_FILE_PATH = '/../../temp_files/'

/**
 * Manage assets that can be stored locally or on cloud.
 */
class AssetService {
  async storeUploadedFile(
    file: UploadedFile,
    dirPath: string = __dirname + ASSET_FILE_PATH
  ) {
    const path = dirPath + file.name
    return file.mv(path, (err) => {
      if (err) throw err
      console.log(`💾 Stored file ${file.name} to ${path}`)
      return path
    }) as unknown as Promise<string>
  }
}

export default new AssetService()
