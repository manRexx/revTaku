import {
  REVIEW_CREATE_FAIL,
  REVIEW_CREATE_REQUEST,
  REVIEW_CREATE_SUCCESS,
  REVIEW_LIST_FAIL,
  REVIEW_LIST_REQUEST,
  REVIEW_LIST_SUCCESS,
  REVIEW_USER_LIST_FAIL,
  REVIEW_USER_LIST_REQUEST,
  REVIEW_USER_LIST_SUCCESS,
} from '../constants/reviewConstants'
import axios from 'axios'

export const listReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: REVIEW_LIST_REQUEST })

    const { data } = await axios.get(`/api/reviews/${id}`)

    dispatch({
      type: REVIEW_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: REVIEW_LIST_FAIL, payload: error.response })
  }
}

export const listUserReviews = (id) => async (dispatch) => {
  try {
    dispatch({ type: REVIEW_USER_LIST_REQUEST })

    const { data } = await axios.get(`/api/reviews/user-review/${id}`)

    dispatch({
      type: REVIEW_USER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: REVIEW_USER_LIST_FAIL, payload: error.response })
  }
}

export const createReview = () => async (dispatch, getState) => {
  try {
    dispatch({ type: REVIEW_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.post('/api/reviews', {}, config)

    dispatch({ type: REVIEW_CREATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: REVIEW_CREATE_FAIL, payload: error.response })
  }
}
