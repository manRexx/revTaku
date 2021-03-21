import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    showId: {
      type: String,
      required: true,
    },
    showImageURL: {
      type: String,
      required: true,
    },
    showName: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    userRating: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model('Review', reviewSchema)
export default Review
