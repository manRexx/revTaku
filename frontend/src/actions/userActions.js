import axios from 'axios'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
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
