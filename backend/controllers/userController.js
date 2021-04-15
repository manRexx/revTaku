import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateTokens.js'

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email: email })

  if (user && user.matchPassword(password)) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
  }
})

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const userExists = await User.findOne({ email: email })

  if (userExists) {
    res.status(400)
    throw new Error('User Already Exists')
  }

  const user = await User.create({
    name: name,
    email: email,
    password: password,
  })

  if (user) {
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid User Data')
  }
})

const getUserProfile = asyncHandler(async (req, res) => {
  console.log('ok 2')
  const user = await User.findById(req.user._id)
  console.log('ok 2')

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
  console.log('ok 2')
})

const getOtherUserProfile = asyncHandler(async (req, res) => {
  console.log('ok 2')
  const user = await User.findById(req.params.userID)
  console.log('ok 2')

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
  console.log('ok 2')
})

export { authUser, getUserProfile, registerUser, getOtherUserProfile }
