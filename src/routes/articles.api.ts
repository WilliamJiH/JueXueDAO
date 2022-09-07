import articleController from '@/controllers/article-controller'
import { Router } from 'express'

const router = Router()

router.get('/articles', articleController.getAllArticles)
router.get('/articles/:entryId', articleController.getArticleByEntryId)
router.get('/articles/:entryId/status', articleController.getArticleNFTStatus)

router.post('/articles', articleController.createArticleNFT)

router.delete('/articles/:entryId', articleController.deleteArticleNFTByEntryID)

export default router
