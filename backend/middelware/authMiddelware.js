import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import User from '../models/userModel.js'

const protect = async (req, res, next) => {}
const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authourisation &&
    req.headers.authourisation.startsWith('Bearer')
  ) {
    try {
      token = req.header.authourisation.split(' ')[1]
      const decode = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decode.id).select('-password')
      next()
    } catch (error) {
      console.log(error)
    }
  }

  if (!token) {
    res.status(401)
  }
})

export { protect }
export { protect }
