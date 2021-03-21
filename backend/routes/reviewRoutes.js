import express from 'express'
import { addReview } from '../controllers/reviewController.js'
import { protect, admin } from '../middelware/authMiddelware.js'

const router = express.Router()

// router.post('/login', authUser)

router.route('/').post(protect, addReview)

export default router
