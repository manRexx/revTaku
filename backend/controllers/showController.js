import asyncHandler from 'express-async-handler'
import Show from '../models/showModel.js'

const getShows = asyncHandler(async (req, res) => {
  const shows = await Show.find({})
  res.json(shows)
})

const getShowById = asyncHandler(async (req, res) => {
  const show = await Show.findById(req.params.id)

  if (show) {
    res.json(show)
  } else {
    res.status(404).json({ message: 'Product not found!!' })
  }
})

export { getShows, getShowById }
