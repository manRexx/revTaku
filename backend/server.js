// To start server nodemon backend/server
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import showRoutes from './routes/showRoutes.js'

dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server is running')
})

app.use('/api/shows', showRoutes)

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
