import React, { useEffect } from 'react'
import { Jumbotron, Row, Col, Image, Card, Table, Alert } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { listUserReviews } from '../actions/reviewActions'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import { getOtherUserInfo } from '../actions/userActions'

const ProfileInfoScreen = ({ match }) => {
  const requestedUserID = match.params.userID

  const dispatch = useDispatch()

  const userOtherInfo = useSelector((state) => state.userOtherInfo)
  const { info, loading: infoLoading } = userOtherInfo

  const reviewUserList = useSelector((state) => state.reviewUserList)
  const { loading, reviews: rev, error } = reviewUserList

  useEffect(() => {
    dispatch(getOtherUserInfo(requestedUserID))
    dispatch(listUserReviews(requestedUserID))
  }, [dispatch, requestedUserID])

  return (
    <>
      {/* <Alert variant='success'>
        <Alert.Heading>
          <center>
            <b>{userInfo.name}</b>
          </center>
        </Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className='mb-0'>
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert> */}
      {infoLoading ? <Loader /> : <h1>{info.name}</h1>}

      <div className='emptyHeight'></div>
      <Row>
        <Col xl={4}>
          <Table striped bordered hover rounded>
            <tbody>
              <tr>
                <td>
                  <center>Released at</center>
                </td>
                <td>
                  <center>
                    <strong>{requestedUserID}</strong>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>Released at</center>
                </td>
                <td>
                  <center>
                    <strong>{requestedUserID}</strong>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>Released at</center>
                </td>
                <td>
                  <center>
                    <strong>{requestedUserID}</strong>
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>Released at</center>
                </td>
                <td>
                  <center>
                    <strong>{requestedUserID}</strong>
                  </center>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          {!loading &&
            rev.map(
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
        </Col>
      </Row>
    </>
  )
}

export default ProfileInfoScreen
