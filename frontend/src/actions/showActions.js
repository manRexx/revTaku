import axios from 'axios'
import {
  SHOW_DETAILS_FAIL,
  SHOW_DETAILS_REQUEST,
  SHOW_DETAILS_SUCCESS,
  SHOW_LIST_FAIL,
  SHOW_LIST_REQUEST,
  SHOW_LIST_SUCCESS,
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
