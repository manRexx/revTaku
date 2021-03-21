import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  showListReducer,
  showDetailReducer,
  showCreateReducer,
  showUpdateReducer,
} from './reducers/showReducers'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import {
  reviewListReducer,
  reviewCreateReducer,
} from './reducers/reviewReducers'

const reducer = combineReducers({
  showList: showListReducer,
  showDetail: showDetailReducer,
  showCreate: showCreateReducer,
  showUpdate: showUpdateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  reviewList: reviewListReducer,
  reviewCreate: reviewCreateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = { userLogin: { userInfo: userInfoFromStorage } }

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
