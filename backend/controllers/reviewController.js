import asyncHandler from 'express-async-handler'
import Review from '../models/reviewModel.js'
import Show from '../models/showModel.js'

const getReviews = asyncHandler(async (req, res) => {
  const id = req.params.id
  const reviews = await Review.find({ showId: id })

  res.json(reviews)
})

const getUserReviews = asyncHandler(async (req, res) => {
  const id = req.params.id
  const reviews = await Review.find({ userId: id })

  res.json(reviews)
})

const createReview = asyncHandler(async (req, res) => {
  const review = new Review({
    userId: req.user._id,
    userName: req.user.name,
    showId: 'Sample Data',
    showImageURL: 'Sample Data',
    showName: 'Sample Data',
    review: 'Sample Data',
    userRating: 0,
  })
  const createdReview = await review.save()

  res.status(201).json(createdReview)
})

const updatedReview = asyncHandler(async (req, res) => {
  const {
    userId,
    userName,
    showId,
    showImageURL,
    showName,
    review,
    userRating,
  } = req.body

  const rev = await Review.findById(req.params.id)

  const show = await Show.findById(showId)

  if (rev && show) {
    rev.userId = userId
    rev.userName = userName
    rev.showId = showId
    rev.showImageURL = showImageURL
    rev.showName = showName
    rev.review = review
    rev.userRating = userRating

    show.reviews.push(rev)
    show.numReviews = show.reviews.length
    show.rating =
      show.reviews.reduce((acc, item) => item.userRating + acc, 0) /
      show.reviews.length

    await show.save()

    const updatedReview = await rev.save()

    res.json(updatedReview)
  } else {
    res.status(404)
    throw new Error('Review not found')
  }
})

export { createReview, getReviews, getUserReviews, updatedReview }
