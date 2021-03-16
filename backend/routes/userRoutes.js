import express from 'express'
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js'
import { protect, admin } from '../middelware/authMiddelware.js'

const router = express.Router()

router.post('/login', authUser)

router
  .route('/profile')
  .get(protect, getUserProfile)
  .post(protect, updateUserProfile)

router.route('/').post(registerUser).get(protect, admin, getUsers)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)

export default router
