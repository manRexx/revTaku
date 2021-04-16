import React, { useEffect, useState } from 'react'
import {
  Jumbotron,
  Row,
  Col,
  Image,
  Card,
  Table,
  Alert,
  Button,
} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { listUserReviews } from '../actions/reviewActions'
import { follow, unFollow } from '../actions/userActions'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import { getOtherUserInfo, getCurrentUserInfo } from '../actions/userActions'

const ProfileInfoScreen = ({ match }) => {
  const requestedUserID = match.params.userID
  const [len, setLen] = useState(0)
  var rating = 0
  var length = 0

  const dispatch = useDispatch()

  const userOtherInfo = useSelector((state) => state.userOtherInfo)
  const { info, loading: infoLoading } = userOtherInfo

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userCurrentInfo = useSelector((state) => state.userCurrentInfo)
  const { loading: load, info: INFO, error: err } = userCurrentInfo

  const userFollow = useSelector((state) => state.userFollow)
  const { success: followSuccess } = userFollow

  const userUnFollow = useSelector((state) => state.userUnFollow)
  const { success: unFollowSuccess } = userUnFollow

  const reviewUserList = useSelector((state) => state.reviewUserList)
  const { loading, reviews: rev, error } = reviewUserList

  useEffect(() => {
    if (requestedUserID.length !== 0) {
      dispatch(listUserReviews(requestedUserID))
      dispatch(getOtherUserInfo(requestedUserID))
      dispatch(getCurrentUserInfo())
    }
    if (followSuccess && unFollowSuccess) {
      dispatch(getOtherUserInfo(requestedUserID))
      dispatch(getCurrentUserInfo())
    }
  }, [dispatch, requestedUserID, followSuccess, unFollowSuccess])

  if (!loading && info) {
    length = rev.reduce(
      (acc, review) => (review.showId === 'Sample Data' ? acc + 0 : acc + 1),
      0
    )
    rating = rev.reduce((acc, review) => acc + review.userRating, 0)
    rating = rating / length
  }

  const unfollowHandler = (unFollowId) => {
    //DISPATCH UNFOLLOW
    console.log('unfollow')
    dispatch(unFollow(requestedUserID))
  }
  const followHandler = (followId) => {
    //DISPATCH FOLLOW
    console.log('follow')
    dispatch(follow(requestedUserID))
  }

  return (
    <>
      <div className='emptyHeightSmall'></div>
      {infoLoading ? (
        <Loader />
      ) : !info ? (
        <Loader />
      ) : (
        <center>
          <h1>
            <strong>u/{info.name}</strong>
          </h1>

          <Button
            variant='danger'
            className='rounded'
            onClick={unfollowHandler}
          >
            Un-follow
          </Button>
          <Button variant='primary' className='rounded' onClick={followHandler}>
            Follow
          </Button>
          <hr />
          <Row>
            <Col>
              Followers: <strong>{info.followers.length / 2}</strong>
            </Col>
            <Col>
              Following: <strong>{info.following.length}</strong>
            </Col>
            <Col>
              Average Show Rating: <strong> {rating}</strong>
            </Col>
          </Row>
        </center>
      )}

      <div className='emptyHeight'></div>
      <Row>
        <Col xl={4}>
          {infoLoading ? (
            <Loader />
          ) : !info ? (
            <Loader />
          ) : (
            <Table striped bordered hover className='rounded'>
              <tbody>
                <tr>
                  <td>
                    <center>Rev-Taku ID</center>
                  </td>
                  <td>
                    <center>
                      <strong>{info._id}</strong>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>
                    <center>E-mail</center>
                  </td>
                  <td>
                    <center>
                      <strong>{info.email}</strong>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>
                    <center>Average Rating</center>
                  </td>
                  <td>
                    <center>
                      <strong>{rating} </strong>/ show
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>
                    <center>Shows Reviewed</center>
                  </td>
                  <td>
                    <center>
                      <strong>{length}</strong>
                    </center>
                  </td>
                </tr>
                {info.isAdmin && (
                  <tr>
                    <td>
                      <center>ADMIN ACCOUNT</center>
                    </td>
                    <td>
                      <center>
                        <strong>TRUE</strong>
                      </center>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          )}
        </Col>
        <Col>
          {!loading &&
            rev.map(
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
        </Col>
      </Row>
    </>
  )
}

export default ProfileInfoScreen
