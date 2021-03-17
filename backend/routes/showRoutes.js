import express from 'express'
import {
  getShows,
  getShowById,
  createShow,
  updateShow,
} from '../controllers/showController.js'
import { protect, admin } from '../middelware/authMiddelware.js'

const router = express.Router()

router.route('/').get(getShows).post(protect, admin, createShow)
router.route('/:id').get(getShowById).put(protect, admin, updateShow)

export default router
