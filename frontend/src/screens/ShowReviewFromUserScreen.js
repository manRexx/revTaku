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
  Card,
  Container,
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

  const reviewList = useSelector((state) => state.reviewList)
  const {
    error: errorReviewList,
    reviews: reviewData,
    loading: loadingReviewList,
  } = reviewList

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
      if (!loadingReviewList) {
        if (reviewData.length === 0) {
          setUserRating(0)
          setUserReview('')
        } else {
          reviewData.map(
            (rev) => rev.userId === userInfo.id && setUserRating(rev.userRating)
          )
          reviewData.map(
            (rev) => rev.userId === userInfo.id && setUserReview(rev.review)
          )
        }
      }
    }
  }, [dispatch, showId, showLoading, successUpdate, loadingReviewList])

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
      {' '}
      <div className='emptyHeight'></div>
      <h1>
        Write your thoughts on,
        <strong>
          <u>{show.originalTitle}</u>
        </strong>{' '}
      </h1>{' '}
      <div className='emptyHeight'></div>
      <Row>
        <Col>
          <Card className='m-3' style={{ width: '18rem' }}>
            <Card.Header>
              <strong>Information</strong>
            </Card.Header>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                Show Name: <strong>{show.originalTitle}</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                Type:
                <strong>
                  {' '}
                  {show.isMovie && 'MOVIE'} {show.isSeries && 'SERIES'}{' '}
                  {show.isAnime && 'ANIME'}
                </strong>
              </ListGroup.Item>
              <ListGroup.Item>
                Rev-Taku ID: <strong>{showId}</strong>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          {loadingUpdate && <Loader />}
          {showLoading && loadingReviewList ? (
            <Loader />
          ) : (
            <Container className='p-3'>
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
                    as='textarea'
                    rows={3}
                    placeholder='......'
                    value={userReview}
                    onChange={(e) => setUserReview(e.target.value)}
                  ></FormControl>
                </FormGroup>
                <Button type='submit' variant='primary'>
                  Update
                </Button>
              </Form>
            </Container>
          )}
        </Col>
      </Row>
    </>
  )
}

export default ShowReviewFromUserScreen
