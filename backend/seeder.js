import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import Show from './models/showModel.js'
import User from './models/userModel.js'
import users from './data/users.js'
import shows from './data/shows.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await Show.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleShows = shows.map((show) => {
      return { ...show, user: adminUser }
    })

    await Show.insertMany(sampleShows)

    console.log('Data imported!!')
    process.exit()
  } catch (error) {
    console.log(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany()
    await Show.deleteMany()

    console.log('Data deleted!!')
    process.exit()
  } catch (error) {
    console.log(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
