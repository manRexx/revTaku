import {
  SHOW_LIST_FAIL,
  SHOW_LIST_SUCCESS,
  SHOW_LIST_REQUEST,
  SHOW_DETAILS_REQUEST,
  SHOW_DETAILS_SUCCESS,
  SHOW_DETAILS_FAIL,
} from '../constants/showConstants'

export const showListReducer = (state = { shows: [] }, action) => {
  switch (action.type) {
    case SHOW_LIST_REQUEST:
      return { loading: true }
    case SHOW_LIST_SUCCESS:
      return { loading: false, shows: action.payload }
    case SHOW_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const showDetailReducer = (
  state = { show: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case SHOW_DETAILS_REQUEST:
      return { loading: true, ...state }
    case SHOW_DETAILS_SUCCESS:
      return { loading: false, show: action.payload }
    case SHOW_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
