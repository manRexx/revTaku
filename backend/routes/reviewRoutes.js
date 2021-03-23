import express from 'express'
import {
  getReviews,
  getUserReviews,
  updatedReview,
  createReview,
} from '../controllers/reviewController.js'
import { protect, admin } from '../middelware/authMiddelware.js'

const router = express.Router()

router.route('/').post(protect, createReview)
router.route('/:id').get(getReviews).put(protect, updatedReview)
router.route('/user-review/:id').get(getUserReviews)

export default router
