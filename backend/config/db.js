import mongoose from 'mongoose'
import Show from '../models/showModel.js';

const dummyData = {
  user: "63f29d56b3f1203e8e543f0a", // ObjectId of a user from your "User" collection
  originalTitle: "Stranger Things",
  image: "https://example.com/stranger-things.jpg",
  description: "A group of kids in the 80s discover a parallel world filled with mysteries.",
  isMovie: false,
  isSeries: true,
  isAnime: false,
  noOfSeasons: 4,
  seasonInfo: [
    {
      seasonNumber: 1,
      seasonName: "Season 1",
      wallpaper: "https://example.com/stranger-things-season1.jpg",
      info: "The kids in Hawkins, Indiana, start encountering strange occurrences.",
      startOfSeason: "2016-07-15"
    },
    {
      seasonNumber: 2,
      seasonName: "Season 2",
      wallpaper: "https://example.com/stranger-things-season2.jpg",
      info: "The gang deals with new monsters while trying to uncover the secrets of the Upside Down.",
      startOfSeason: "2017-10-27"
    }
  ],
  trailerLink: "https://youtube.com/watch?v=XWxyRG_tckY",
  genres: ["Sci-Fi", "Horror", "Drama"],
  isAdult: false,
  language: ["English"],
  dateOfRelease: "2016-07-15",
  rating: 8.7,
  reviews: [
    {
      userId: "63f29d56b3f1203e8e543f0b", // ObjectId of a user from your "User" collection
      userName: "John Doe",
      showId: "63f2a456b4e1203e8e543f1b", // ObjectId of the current show
      showImageURL: "https://example.com/stranger-things.jpg",
      showName: "Stranger Things",
      review: "An amazing blend of sci-fi and horror, with memorable characters and a gripping plot.",
      userRating: 9
    },
    {
      userId: "63f29d56b3f1203e8e543f0c", // ObjectId of another user
      userName: "Jane Smith",
      showId: "63f2a456b4e1203e8e543f1b", // ObjectId of the current show
      showImageURL: "https://example.com/stranger-things.jpg",
      showName: "Stranger Things",
      review: "I loved the concept, but the pacing was a bit slow in the middle of Season 2.",
      userRating: 7
    }
  ],
  numReviews: 2
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })

    Show.create(dummyData)
    .then((result) => {
      console.log('___________________________________________Dummy data added:', result)
    })
    .catch((err) => {
      console.log('___________________________________________Error adding dummy data:', err)
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
