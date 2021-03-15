import {
  SHOW_LIST_FAIL,
  SHOW_LIST_SUCCESS,
  SHOW_LIST_REQUEST,
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
