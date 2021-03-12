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

app.get('/movie/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  const d = data.find((show) => show._id === Number(id))
})

// app.get('/shows/genre', (req, res) => {
//   //   const param = req.params.genre
//   //   console.log(param)
// //   const d = data.map((movie) =>
// //     movie.genre.findIndex((mov) => (mov === 'drama' ? movie : null))
// //   )

//   const answer=data.map()

//   console.log(d)
//   res.send(d)
// })

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
