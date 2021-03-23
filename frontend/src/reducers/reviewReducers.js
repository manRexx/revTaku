import {
  REVIEW_LIST_FAIL,
  REVIEW_LIST_REQUEST,
  REVIEW_LIST_SUCCESS,
  REVIEW_CREATE_FAIL,
  REVIEW_CREATE_REQUEST,
  REVIEW_CREATE_SUCCESS,
  REVIEW_USER_LIST_REQUEST,
  REVIEW_USER_LIST_SUCCESS,
  REVIEW_USER_LIST_FAIL,
  REVIEW_CREATE_RESET,
  REVIEW_UPDATE_REQUEST,
  REVIEW_UPDATE_SUCCESS,
  REVIEW_UPDATE_FAIL,
  REVIEW_UPDATE_RESET,
} from '../constants/reviewConstants'

export const reviewListReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case REVIEW_LIST_REQUEST:
      return { loading: true }
    case REVIEW_LIST_SUCCESS:
      return { loading: false, reviews: action.payload }
    case REVIEW_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const reviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case REVIEW_CREATE_REQUEST:
      return { loading: true }
    case REVIEW_CREATE_SUCCESS:
      return { loading: false, success: true, review: action.payload }
    case REVIEW_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case REVIEW_CREATE_RESET:
      return {}

    default:
      return state
  }
}

export const reviewUpdateReducer = (state = { review: {} }, action) => {
  switch (action.type) {
    case REVIEW_UPDATE_REQUEST:
      return { loading: true }
    case REVIEW_UPDATE_SUCCESS:
      return { loading: false, success: true, review: action.payload }
    case REVIEW_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case REVIEW_UPDATE_RESET:
      return { review: {} }

    default:
      return state
  }
}

export const reviewUserListReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case REVIEW_USER_LIST_REQUEST:
      return { loading: true }
    case REVIEW_USER_LIST_SUCCESS:
      return { loading: false, reviews: action.payload }
    case REVIEW_USER_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
