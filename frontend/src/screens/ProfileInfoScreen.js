import React, { useEffect, useState } from 'react'
import { Jumbotron, Row, Col, Image, Card, Table, Alert } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { listUserReviews } from '../actions/reviewActions'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import { getOtherUserInfo } from '../actions/userActions'

const ProfileInfoScreen = ({ match }) => {
  const requestedUserID = match.params.userID
  const [len, setLen] = useState(0)
  var rating = 0
  var length = 0

  const dispatch = useDispatch()

  const userOtherInfo = useSelector((state) => state.userOtherInfo)
  const { info, loading: infoLoading } = userOtherInfo

  const reviewUserList = useSelector((state) => state.reviewUserList)
  const { loading, reviews: rev, error } = reviewUserList

  useEffect(() => {
    if (requestedUserID.length !== 0) {
      dispatch(listUserReviews(requestedUserID))
      dispatch(getOtherUserInfo(requestedUserID))
    }
  }, [dispatch, requestedUserID])

  if (!loading && info) {
    length = rev.reduce(
      (acc, review) => (review.showId === 'Sample Data' ? acc + 0 : acc + 1),
      0
    )
    rating = rev.reduce((acc, review) => acc + review.userRating, 0)
    rating = rating / length
  }

  return (
    <>
      {infoLoading ? (
        <Loader />
      ) : !info ? (
        <Loader />
      ) : (
        <center>
          <h1>
            <strong>{info.name}</strong>
          </h1>
          <hr />
          <h4>
            Average Rating:<strong> {rating} </strong>
          </h4>
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
            <Table striped bordered hover rounded>
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
