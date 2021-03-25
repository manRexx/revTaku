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

const createShow = asyncHandler(async (req, res) => {
  const show = new Show({
    originalTitle: 'Sample Data',
    image: '/home/manrexx/Desktop/test.jpeg',
    user: req.user._id,
    description: 'Sample Data',
    isMovie: false,
    isSeries: false,
    isAnime: false,
    trailerLink: 'Sample Data',
    isAdult: true,
    dateOfRelease: 'Sample Data',
  })

  const createShow = await show.save()
  res.status(201).json(createShow)
})

const updateShow = asyncHandler(async (req, res) => {
  const {
    originalTitle,
    image,
    description,
    isMovie,
    isSeries,
    isAnime,
    noOfSeasons,
    trailerLink,
    genres,
    isAdult,
    language,
    dateOfRelease,
  } = req.body

  const show = await Show.findById(req.params.id)

  if (show) {
    show.originalTitle = originalTitle
    show.image = image
    show.description = description
    show.trailerLink = trailerLink
    show.dateOfRelease = dateOfRelease
    show.isAdult = isAdult
    show.isMovie = isMovie
    show.isSeries = isSeries
    show.isAnime = isAnime
    show.genres = genres
    show.language = language

    const updatedShow = await show.save()
    res.json(updatedShow)
  } else {
    res.status(404)
    throw new Error('Show not fournd')
  }
})

export { getShows, getShowById, createShow, updateShow }
