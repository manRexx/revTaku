import express from 'express'
import { addReview, getReviews } from '../controllers/reviewController.js'
import { protect, admin } from '../middelware/authMiddelware.js'

const router = express.Router()

// router.post('/login', authUser)

router.route('/').get(getReviews).post(protect, addReview)

export default router
