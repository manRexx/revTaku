import {
  SHOW_LIST_FAIL,
  SHOW_LIST_SUCCESS,
  SHOW_LIST_REQUEST,
  SHOW_DETAILS_REQUEST,
  SHOW_DETAILS_SUCCESS,
  SHOW_DETAILS_FAIL,
  SHOW_CREATE_REQUEST,
  SHOW_CREATE_SUCCESS,
  SHOW_CREATE_FAIL,
  SHOW_CREATE_RESET,
  SHOW_UPDATE_REQUEST,
  SHOW_UPDATE_SUCCESS,
  SHOW_UPDATE_FAIL,
  SHOW_UPDATE_RESET,
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

export const showCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOW_CREATE_REQUEST:
      return { loading: true }
    case SHOW_CREATE_SUCCESS:
      return { loading: false, success: true, show: action.payload }
    case SHOW_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case SHOW_CREATE_RESET:
      return {}

    default:
      return state
  }
}

export const showUpdateReducer = (state = { show: {} }, action) => {
  switch (action.type) {
    case SHOW_UPDATE_REQUEST:
      return { loading: true }
    case SHOW_UPDATE_SUCCESS:
      return { loading: false, success: true, show: action.payload }
    case SHOW_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case SHOW_UPDATE_RESET:
      return { show: {} }

    default:
      return state
  }
}
