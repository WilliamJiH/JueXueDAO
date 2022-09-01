import publicationController from '@/controllers/publication-controller'
import { Router } from 'express'

const router = Router()

router.get('/publication', publicationController.getAllPublicationNFTs)
router.get('/publication/:id', publicationController.getPublicationNFT)
router.post('/publication', publicationController.createPublicationNFT)

export default router
