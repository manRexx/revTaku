import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  getOtherUserProfile,
  follow,
  unFollow,
  notification,
} from '../controllers/userController.js'
import { protect, admin } from '../middelware/authMiddelware.js'

const router = express.Router()

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)
router.route('/').post(registerUser)
router.route('/notification').get(protect, notification)
router.route('/:userID').get(getOtherUserProfile)
router.route('/follow').put(protect, follow)
router.route('/unfollow').put(protect, unFollow)

export default router
