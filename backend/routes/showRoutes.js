import express from 'express'
import {
  getShows,
  getShowById,
  createShow,
  updateShow,
  showContribute,
} from '../controllers/showController.js'
import { protect, admin } from '../middelware/authMiddelware.js'

const router = express.Router()

router.route('/').get(getShows).post(protect, admin, createShow)
router.route('/:id').get(getShowById).put(protect, admin, updateShow)
router.route('/show').post(showContribute)

export default router
