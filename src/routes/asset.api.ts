import assetController from '../controllers/asset-controller'
import { Router } from 'express'

const router = Router()

router.get('/assets', assetController.getAllArticleNFT)
router.get('/assets/:id', assetController.getAssetNFT)
router.post('/assets', assetController.createAssetNFT)

export default router
