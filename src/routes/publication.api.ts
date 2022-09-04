import publicationController from '@/controllers/publication-controller'
import { Router } from 'express'

const router = Router()

router.get('/publications', publicationController.getAllPublicationNFTs)
router.get('/publications/:id', publicationController.getPublicationNFT)
router.post('/publications', publicationController.createPublicationNFT)

export default router
