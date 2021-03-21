import {
  REVIEW_LIST_FAIL,
  REVIEW_LIST_REQUEST,
  REVIEW_LIST_SUCCESS,
} from '../constants/reviewConstants'
import axios from 'axios'

export const listReviews = () => async (dispatch) => {
  try {
    dispatch({ type: REVIEW_LIST_REQUEST })
    const { data } = await axios.get('/api/reviews')

    dispatch({
      type: REVIEW_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: REVIEW_LIST_FAIL, payload: error.response })
  }
}
