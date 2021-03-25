import mongoose from 'mongoose'

const seasonInfoSchema = mongoose.Schema(
  {
    seasonNumber: {
      type: Number,
      required: true,
    },
    seasonName: {
      type: String,
      required: true,
    },
    wallpaper: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    startOfSeason: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const showSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    originalTitle: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isMovie: {
      type: Boolean,
      required: true,
    },
    isSeries: {
      type: Boolean,
      required: true,
    },
    isAnime: {
      type: Boolean,
      required: true,
    },
    noOfSeasons: {
      type: Number,
      required: true,
      default: 0,
    },
    seasonInfo: [seasonInfoSchema],
    trailerLink: {
      type: String,
      required: true,
    },
    genres: [
      {
        type: String,
      },
    ],
    isAdult: {
      type: Boolean,
      required: true,
    },
    language: [
      {
        type: String,
      },
    ],
    dateOfRelease: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Show = mongoose.model('Show', showSchema)

export default Show
