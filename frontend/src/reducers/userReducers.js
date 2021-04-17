import {
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_OTHER_INFO_FAIL,
  USER_OTHER_INFO_REQUEST,
  USER_OTHER_INFO_SUCCESS,
  USER_FOLLOW_SUCCESS,
  USER_FOLLOW_FAIL,
  USER_FOLLOW_REQUEST,
  USER_UNFOLLOW_SUCCESS,
  USER_UNFOLLOW_FAIL,
  USER_UNFOLLOW_REQUEST,
  USER_CURRENT_SUCCESS,
  USER_CURRENT_FAIL,
  USER_CURRENT_REQUEST,
  USER_FEED_SUCCESS,
  USER_FEED_FAIL,
  USER_FEED_REQUEST,
} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { loading: true, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_LOGOUT:
      return {}

    default:
      return state
  }
}

export const userOtherInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_OTHER_INFO_SUCCESS:
      return { loading: false, info: action.payload }
    case USER_OTHER_INFO_FAIL:
      return { loading: false, error: action.payload }
    case USER_OTHER_INFO_REQUEST:
      return { loading: true }

    default:
      return state
  }
}

export const userCurrentInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CURRENT_SUCCESS:
      return { loading: false, info: action.payload }
    case USER_CURRENT_FAIL:
      return { loading: false, error: action.payload }
    case USER_CURRENT_REQUEST:
      return { loading: true }

    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    case USER_REGISTER_REQUEST:
      return { loading: true }

    default:
      return state
  }
}

export const userFollowReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FOLLOW_SUCCESS:
      return { loading: false, success: true }
    case USER_FOLLOW_FAIL:
      return { loading: false, error: action.payload }
    case USER_FOLLOW_REQUEST:
      return { loading: true }

    default:
      return state
  }
}

export const userUnFollowReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UNFOLLOW_SUCCESS:
      return { loading: false, success: true }
    case USER_UNFOLLOW_FAIL:
      return { loading: false, error: action.payload }
    case USER_UNFOLLOW_REQUEST:
      return { loading: true }

    default:
      return state
  }
}

export const userFeedReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FEED_SUCCESS:
      return { loading: false, feed: action.payload }
    case USER_FEED_FAIL:
      return { loading: false, error: action.payload }
    case USER_FEED_REQUEST:
      return { loading: true }

    default:
      return state
  }
}
