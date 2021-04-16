import axios from 'axios'
import {
  USER_FOLLOW_FAIL,
  USER_FOLLOW_REQUEST,
  USER_FOLLOW_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_OTHER_INFO_FAIL,
  USER_OTHER_INFO_REQUEST,
  USER_OTHER_INFO_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.response })
  }
}

export const getOtherUserInfo = (userID) => async (dispatch) => {
  try {
    dispatch({ type: USER_OTHER_INFO_REQUEST })
    const { data } = await axios.get(`/api/users/${userID}`)
    console.log(data)

    dispatch({
      type: USER_OTHER_INFO_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: USER_OTHER_INFO_FAIL, payload: error.response })
  }
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    )
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data })

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.response })
  }
}

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGIN_LOGOUT })
  } catch (error) {
    console.log(error)
  }
}

export const follow = (followId) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_FOLLOW_REQUEST })
    console.log(followId)

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(`/api/users/follow/`, { followId }, config)

    dispatch({ type: USER_FOLLOW_SUCCESS, success: true })
  } catch (error) {
    dispatch({ type: USER_FOLLOW_FAIL, payload: error.response })
  }
}
