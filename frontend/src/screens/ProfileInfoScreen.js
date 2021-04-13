import React, { useEffect } from 'react'
import { Jumbotron, Row, Col, Image, Card } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { listUserReviews } from '../actions/reviewActions'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

const ProfileInfoScreen = ({ match }) => {
  const requestedUserID = match.params.userID

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const reviewUserList = useSelector((state) => state.reviewUserList)
  const { loading, reviews, error } = reviewUserList

  const image_URL =
    'https://i.pinimg.com/originals/29/24/89/292489e7d0bf8ce7d5ffd81be62d0800.png'

  useEffect(() => {
    dispatch(listUserReviews(requestedUserID))
  }, [dispatch, userLogin, requestedUserID])

  return (
    <>
      {!loading &&
        reviews.map(
          (review) =>
            review.showName !== 'Sample Data' && (
              <>
                <Card className='text-center'>
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
                    <Card.Text>Created @: {review.createdAt}</Card.Text>
                  </Card.Body>
                </Card>
                <h1></h1>
              </>
            )
        )}
    </>
  )
}

export default ProfileInfoScreen
