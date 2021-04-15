import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  getOtherUserProfile,
} from '../controllers/userController.js'
import { protect, admin } from '../middelware/authMiddelware.js'

const router = express.Router()

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)
router.route('/').post(registerUser)
router.route('/:userID').get(getOtherUserProfile)

export default router
