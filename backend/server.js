import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server is running')
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
