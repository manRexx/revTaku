import asyncHandler from 'express-async-handler'
import Review from '../models/reviewModel.js'

const addReview = asyncHandler(async (req, res) => {
  console.log('AD1')
  const d = req.body
  console.log(d)
  console.log('AD1')

  const reviewExist = await Review.findOne({
    userId: d.userId,
    showId: d.showId,
  })
  console.log('AD1')

  if (reviewExist) {
    res.status(400)
    throw new Error('User Review Already Exists')
  }
  console.log('AD1')

  const userReview = await Review.create({
    userId: d.userId,
    showId: d.showId,
    userName: d.userName,
    showImageURL: d.showImageURL,
    showName: d.showName,
    review: d.review,
    userRating: d.userRating,
  })
  console.log('AD1')

  if (userReview) {
    res.status(201).json({
      userId: d.userId,
      showId: d.showId,
      userName: d.userName,
      showImageURL: d.showImageURL,
      showName: d.showName,
      review: d.review,
      userRating: d.userRating,
    })
  } else {
    res.status(400)
    throw new Error('Invalid Review Data')
  }
})

const getReviews = asyncHandler(async (req, res) => {
  const id = req.params.id
  const reviews = await Review.find({ showId: id })

  res.json(reviews)
})

const getUserReviews = asyncHandler(async (req, res) => {
  const id = req.params.userId
  const reviews = await Review.find({ userId: id })

  res.json(reviews)
})

export { addReview, getReviews, getUserReviews }
