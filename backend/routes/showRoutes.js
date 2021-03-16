import express from 'express'
import asyncHandler from 'express-async-handler'
import Show from '../models/showModel.js'
import { getShows, getShowById } from '../controllers/showController.js'

const router = express.Router()

router.route('/').get(getShows)
router.route('/:id').get(getShowById)

export default router
