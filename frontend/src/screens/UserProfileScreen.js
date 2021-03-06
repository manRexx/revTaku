import React, { useEffect } from 'react'
import {
  Jumbotron,
  Row,
  Col,
  Image,
  Card,
  Alert,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { listUserReviews } from '../actions/reviewActions'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

const UserProfileScreen = () => {
  const dispatch = useDispatch()
  var rating = 0
  var length = 0

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const reviewUserList = useSelector((state) => state.reviewUserList)
  const { loading, reviews, error } = reviewUserList

  const image_URL =
    'https://i.pinimg.com/originals/29/24/89/292489e7d0bf8ce7d5ffd81be62d0800.png'

  useEffect(() => {
    const userId = userInfo.id
    dispatch(listUserReviews(userId))
  }, [dispatch, userLogin])

  if (!loading && reviews) {
    length = reviews.reduce(
      (acc, review) => (review.showId === 'Sample Data' ? acc + 0 : acc + 1),
      0
    )
    rating = reviews.reduce((acc, review) => acc + review.userRating, 0)
    rating = rating / length
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {userInfo.isAdmin && (
            <>
              <Alert variant='primary' className='rounded'>
                <h5>
                  <strong>This is a Admin Account</strong>
                </h5>
              </Alert>
            </>
          )}
          <Jumbotron className='rounded'>
            <Row className='mx-auto p-1'>
              <Col xs={6} md={4}>
                <center>
                  {' '}
                  <Image
                    src={image_URL}
                    roundedCircle
                    style={{ height: '12rem' }}
                  />
                </center>
              </Col>
              <Col className='my-auto'>
                <h1>
                  Hello, <strong>{userInfo.name}!</strong>
                </h1>
                <h3>
                  You registered email:{' '}
                  <strong>
                    <u>{userInfo.email}</u>
                  </strong>
                </h3>
              </Col>
            </Row>
          </Jumbotron>
          <center>
            <h2>
              Your average rating: <strong>{rating}</strong>
            </h2>
          </center>
          <hr />
          <h2>Your Reviews</h2>

          {reviews.map(
            (review) =>
              review.showName !== 'Sample Data' && (
                <>
                  <Card className='text-center rounded'>
                    <Link to={`/show-info/${review.showId}`}>
                      {' '}
                      <Card.Header>{review.showName}</Card.Header>
                    </Link>
                    <Card.Body>
                      <Card.Title>
                        Your rating:{' '}
                        <span>
                          <h3>
                            <strong>{review.userRating}</strong>
                          </h3>
                        </span>
                      </Card.Title>

                      <Card.Text>{review.review}</Card.Text>
                    </Card.Body>
                  </Card>
                  <h1></h1>
                </>
              )
          )}
        </>
      )}
    </>
  )
}

export default UserProfileScreen
