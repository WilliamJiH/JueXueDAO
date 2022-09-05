import publicationController from '@/controllers/publication-controller'
import { Router } from 'express'

const router = Router()

router.get('/publications', publicationController.getAllPublications)
router.get(
  '/publications/:entryId',
  publicationController.getPublicationByEntryId
)
router.get(
  '/publications/ipnft/:ipnft',
  publicationController.getPublicationByCID
)
router.get(
  '/publications/author_address/:authorPublicKey',
  publicationController.getPublicationsByAuthorPublicKey
)
router.get(
  '/publications/status/:entryId',
  publicationController.getPublicationNFTStatus
)

router.post('/publications', publicationController.createPublicationNFT)

router.delete(
  '/publications/:entryId',
  publicationController.deletePublicationNFTByEntryID
)

router.delete(
  '/publications/ipnft/:ipnft',
  publicationController.deletePublicationNFTByCID
)

export default router
