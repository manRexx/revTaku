import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

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
      res.status(401)
    }
  }

  if (!token) {
    res.status(401)
  }
})

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not an Admin')
  }
}

export { protect, admin }
