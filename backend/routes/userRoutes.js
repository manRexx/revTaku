import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  getOtherUserProfile,
  follow,
  unFollow,
} from '../controllers/userController.js'
import { protect, admin } from '../middelware/authMiddelware.js'

const router = express.Router()

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)
router.route('/').post(registerUser)
router.route('/:userID').get(getOtherUserProfile)
router.route('/follow').put(protect, follow)
router.route('/un-follow').put(protect, unFollow)

export default router
