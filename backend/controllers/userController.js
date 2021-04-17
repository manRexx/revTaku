import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import Review from '../models/reviewModel.js'
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
      followers: user.followers,
      following: user.following,
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
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      followers: user.followers,
      following: user.following,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const getOtherUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userID)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      followers: user.followers,
      following: user.following,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const follow = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.body.followId,
    {
      $push: { followers: req.user._id },
    },
    { new: true },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: err })
      }
      User.findByIdAndUpdate(
        req.user._id,
        {
          $push: { following: req.body.followId },
        },
        { new: true }
      )
        .then((result) => {
          res.json(result)
        })
        .catch((err) => {
          return res.status(422).json({ error: err })
        })
    }
  )
})

const unFollow = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.body.unFollowId,
    {
      $pull: { followers: req.user._id },
    },
    { new: true },
    (err, result) => {
      if (err) {
        return res.status(422).json({ error: err })
      }
      User.findByIdAndUpdate(
        req.user._id,
        {
          $pull: { following: req.body.unFollowId },
        },
        { new: true }
      )
        .then((result) => {
          res.json(result)
        })
        .catch((err) => {
          return res.status(422).json({ error: err })
        })
    }
  )
})

const notification = asyncHandler(async (req, res) => {
  const u = await User.findById(req.user._id)
  const reviews = await Review.find({ userId: { $in: u.following } })

  if (reviews) {
    res.json(reviews)
  } else {
    res.status(404)
    throw new Error('Notification not found')
  }
})

export {
  authUser,
  getUserProfile,
  registerUser,
  getOtherUserProfile,
  follow,
  unFollow,
  notification,
}
