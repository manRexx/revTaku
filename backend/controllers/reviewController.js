import asyncHandler from 'express-async-handler'
import Review from '../models/reviewModel.js'

const addReview = asyncHandler(async (req, res) => {
  const {
    userId,
    showId,
    showImageURL,
    showName,
    review,
    userRating,
  } = req.body

  const reviewExist = await Review.findOne({ userId: userId, showId: showId })

  if (reviewExist) {
    res.status(400)
    throw new Error('User Review Already Exists')
  }

  const userReview = await Review.create({
    userId: userId,
    showId: showId,
    showImageURL: showImageURL,
    showName: showName,
    review: review,
    userRating: userRating,
  })

  if (userReview) {
    res.status(201).json({
      userId: userReview.userId,
      showId: userReview.showId,
      showImageURL: userReview.showImageURL,
      showName: userReview.showName,
      review: userReview.review,
      userRating: userReview.userRating,
    })
  } else {
    res.status(400)
    throw new Error('Invalid Review Data')
  }
})

const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({})

  res.json(reviews)
})

export { addReview, getReviews }
