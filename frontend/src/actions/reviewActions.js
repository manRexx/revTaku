import {
  REVIEW_CREATE_FAIL,
  REVIEW_CREATE_REQUEST,
  REVIEW_CREATE_SUCCESS,
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

export const createReview = (show, askReview, askRating) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: REVIEW_CREATE_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(
      '/api/reviews',
      {
        userId: userInfo.id,
        userName: userInfo.name,
        showId: show._id,
        showImageURL: show.image,
        showName: show.originalTitle,
        review: askReview,
        userRating: askRating,
      },
      config
    )

    dispatch({
      type: REVIEW_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({ type: REVIEW_CREATE_FAIL, payload: error.response })
  }
}
