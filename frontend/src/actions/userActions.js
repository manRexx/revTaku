import axios from 'axios'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })
    console.log('chal rha hai')

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    console.log('chal rha hai')
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )
    console.log('chal rha hai')
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    console.log('chal rha hai')

    localStorage.setItem('userInfo', JSON.stringify(data))
    console.log('chal rha hai')
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.response })
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