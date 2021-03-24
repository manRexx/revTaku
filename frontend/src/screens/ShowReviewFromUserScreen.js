import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateReview } from '../actions/reviewActions'
import {
  Row,
  Col,
  ListGroup,
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
} from 'react-bootstrap'
import { listShowDetail } from '../actions/showActions'
import Loader from '../components/Loader'
import { REVIEW_UPDATE_RESET } from '../constants/reviewConstants'

const ShowReviewFromUserScreen = ({ history, match }) => {
  const id = match.params.id
  var url_string = window.location.href
  var url = new URL(url_string)
  var showId = url.searchParams.get('showId')

  const [showID, setShowID] = useState('')
  const [showImageURL, setShowImageURL] = useState('')
  const [showName, setShowName] = useState('')
  const [userRating, setUserRating] = useState(0)
  const [userReview, setUserReview] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const showDetail = useSelector((state) => state.showDetail)
  const { error, loading: showLoading, show } = showDetail

  const reviewUpdate = useSelector((state) => state.reviewUpdate)
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = reviewUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: REVIEW_UPDATE_RESET })
      history.push(`/show-info/${showId}`)
    } else {
      dispatch(listShowDetail(showId))
      if (!showLoading) {
        setShowID(show._id)
        setShowImageURL(show.image)
        setShowName(show.originalTitle)
      }
    }
  }, [dispatch, showId, showLoading, successUpdate])

  const subitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateReview({
        _id: id,
        userId: userInfo.id,
        userName: userInfo.name,
        showId: showID,
        showImageURL,
        showName,
        userRating,
        review: userReview,
      })
    )
  }

  return (
    <>
      <h1>review id : {id}</h1>
      <h1>show id : {showId}</h1>
      {loadingUpdate && <Loader />}
      {showLoading ? (
        <Loader />
      ) : (
        <Form onSubmit={subitHandler}>
          <FormGroup controlId='rating'>
            <FormLabel>Rating</FormLabel>
            <FormControl
              type='number'
              placeholder='Rate between 1 to 10'
              value={userRating}
              min={1}
              max={10}
              onChange={(e) => setUserRating(e.target.value)}
            ></FormControl>
          </FormGroup>

          <FormGroup controlId='review'>
            <FormLabel>Review</FormLabel>
            <FormControl
              type='textarea'
              row={3}
              placeholder='......'
              value={userReview}
              onChange={(e) => setUserReview(e.target.value)}
            ></FormControl>
          </FormGroup>
          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      )}
    </>
  )
}

export default ShowReviewFromUserScreen
