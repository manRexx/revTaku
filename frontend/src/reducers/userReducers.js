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
