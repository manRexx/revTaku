// To start server nodemon backend/server
import express from 'express'
const PORT = process.env.PORT || 5000

import data from './data.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server is running')
})

app.get('/shows', (req, res) => {
  res.send(data)
})

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
