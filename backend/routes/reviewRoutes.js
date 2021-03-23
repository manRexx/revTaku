import express from 'express'
import {
  addReview,
  getReviews,
  getUserReviews,
} from '../controllers/reviewController.js'
import { protect, admin } from '../middelware/authMiddelware.js'

const router = express.Router()

// router.post('/login', authUser)

router.route('/').post(protect, addReview)
router.route('/:id').get(getReviews)
router.route('/user-review/:userId').get(getUserReviews)

export default router
