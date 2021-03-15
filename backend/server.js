// To start server nodemon backend/server
import express from 'express'
import dotenv from 'dotenv'
import data from './data.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server is running')
})

app.get('/api/shows', (req, res) => {
  res.send(data)
})

app.get('/api/movie/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  const d = data.find((show) => show._id === Number(id))
})

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
