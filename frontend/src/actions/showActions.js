import axios from 'axios'
import {
  SHOW_CREATE_FAIL,
  SHOW_CREATE_REQUEST,
  SHOW_CREATE_SUCCESS,
  SHOW_DETAILS_FAIL,
  SHOW_DETAILS_REQUEST,
  SHOW_DETAILS_SUCCESS,
  SHOW_LIST_FAIL,
  SHOW_LIST_REQUEST,
  SHOW_LIST_SUCCESS,
  SHOW_UPDATE_FAIL,
  SHOW_UPDATE_REQUEST,
  SHOW_UPDATE_SUCCESS,
} from '../constants/showConstants'

export const listShows = () => async (dispatch) => {
  try {
    dispatch({ type: SHOW_LIST_REQUEST })
    const { data } = await axios.get('/api/shows')

    dispatch({
      type: SHOW_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: SHOW_LIST_FAIL, payload: error.response })
  }
}

export const listShowDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: SHOW_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/shows/${id}`)

    dispatch({
      type: SHOW_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: SHOW_DETAILS_FAIL, payload: error.response })
  }
}

export const createShow = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SHOW_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    console.log('chala')

    const { data } = await axios.post(
      `http://127.0.0.1:5000/api/shows`,
      {},
      config
    )

    console.log('chala')

    dispatch({
      type: SHOW_CREATE_SUCCESS,
      payload: data,
    })
    console.log('chala')
  } catch (error) {
    dispatch({
      type: SHOW_CREATE_FAIL,
      payload: error.response,
    })
  }
}

export const updateShow = (show) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SHOW_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/shows/${show._id}`, show, config)

    dispatch({
      type: SHOW_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SHOW_UPDATE_FAIL,
      payload: error.response,
    })
  }
}
