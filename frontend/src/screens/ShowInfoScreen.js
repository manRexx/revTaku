import React, { useEffect, useState } from 'react'
import {
  Image,
  Row,
  Col,
  Button,
  Badge,
  Jumbotron,
  Container,
  Alert,
  Tabs,
  Tab,
  Card,
  Form,
  FormControl,
  ListGroup,
  Table,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listShowDetail } from '../actions/showActions'
import { listReviews, createReview } from '../actions/reviewActions'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { REVIEW_CREATE_RESET } from '../constants/reviewConstants'
import moment from 'moment'

const ShowInfoScreen = ({ match, history }) => {
  const id = match.params.id

  const m = moment()

  const [key, setKey] = useState('home')

  var isReviewPresent = false

  const showDetail = useSelector((state) => state.showDetail)
  const { error, loading, show } = showDetail

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const reviewList = useSelector((state) => state.reviewList)
  const {
    error: errorReviewList,
    reviews: reviewData,
    loading: loadingReviewList,
  } = reviewList

  const reviewCreate = useSelector((state) => state.reviewCreate)
  const {
    error: errorCreate,
    success: successCreate,
    loading: loadingCreate,
    review: createdReview,
  } = reviewCreate

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: REVIEW_CREATE_RESET })

    if (successCreate) {
      history.push(`/show-review/${createdReview._id}/edit?showId=${show._id}`)
    } else {
      dispatch(listReviews(id))
      dispatch(listShowDetail(id))
    }
  }, [dispatch, id, history, successCreate, createdReview])

  if (!loadingReviewList) {
    show.rating = reviewData.reduce((acc, review) => acc + review.userRating, 0)
    show.rating = show.rating / reviewData.length
  }

  const createReviewHandler = () => {
    dispatch(createReview())
  }

  const editHandler = (editId) => {
    history.push(`/show-review/${editId}/edit?showId=${show._id}`)
  }

  return (
    <div>
      {loadingReviewList ? (
        <Loader />
      ) : (
        <>
          <h2 className='m-auto p-3'>
            <strong>{show.originalTitle}</strong>
          </h2>
          <Row>
            <Col lg={4} className='m-3'>
              <center>
                <Image src={show.image} fluid style={{ height: '25rem' }} />
              </center>
              <div className='p-2'>
                <center>
                  {show.isMovie && (
                    <Badge pill variant='warning'>
                      Movie
                    </Badge>
                  )}{' '}
                  {show.isSeries && (
                    <Badge pill variant='primary'>
                      Series
                    </Badge>
                  )}{' '}
                  {show.isAnime && (
                    <Badge pill variant='danger'>
                      Anime
                    </Badge>
                  )}
                </center>
              </div>
              <div>
                <Table striped bordered hover rounded>
                  <tbody>
                    <tr>
                      <td>
                        <center>Released at</center>
                      </td>
                      <td>
                        <center>
                          <strong>{show.dateOfRelease}</strong>
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <center>Is adult</center>
                      </td>
                      <td>
                        <center>
                          <strong>{show.isAdult ? 'Yes' : 'No'}</strong>
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <center>Available in</center>
                      </td>
                      <td>
                        <center>
                          {show.language &&
                            show.language.map((lan) => (
                              <strong>{lan}&nbsp;&nbsp;</strong>
                            ))}
                        </center>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col>
              <Jumbotron>
                <Row className='m-auto p-3'>
                  <h3>
                    <strong>
                      Overall Rating:{' '}
                      {!show.rating
                        ? 'You are the first to rate!!'
                        : show.rating.toFixed(2)}
                    </strong>
                  </h3>
                </Row>{' '}
                <Row className='m-auto p-3'>
                  <h4>
                    <strong>Genres Tags:</strong>
                  </h4>
                  {show.genres &&
                    show.genres.map((gen) => (
                      <h4>
                        &nbsp;
                        <Button className='rounded'>&nbsp;{gen}&nbsp;</Button>
                      </h4>
                    ))}
                </Row>
                <Row className='m-auto p-3'>
                  <p>{show.description}</p>
                </Row>{' '}
                <Row className='m-auto p-3'>
                  <a href={show.trailerLink} target='blank'>
                    {' '}
                    <Button variant='danger' size='lg' className='rounded'>
                      View Trailer on Youtube
                    </Button>
                  </a>
                </Row>
              </Jumbotron>
            </Col>
          </Row>
          <hr></hr>
          <h1>Reviews</h1>
          <Tabs
            id='controlled-tab-example'
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey='home' title='Your Review'>
              <h1></h1>
              {reviewData.length !== 0 && userInfo && (
                <>
                  {reviewData.map(
                    (review) =>
                      review.userId === userInfo.id && (
                        <>
                          {(isReviewPresent = true)}
                          <Card className='m-auto'>
                            <Card.Header>User: {review.userName}</Card.Header>
                            <Card.Body>
                              <Card.Title>
                                Rating:{' '}
                                <span>
                                  <h3>
                                    <strong>
                                      &nbsp;&nbsp;{review.userRating}
                                    </strong>
                                  </h3>
                                </span>
                              </Card.Title>
                              <Card.Text>{review.review}</Card.Text>
                              <Card.Text>
                                Written @: &nbsp;
                                {moment(review.createdAt).format(
                                  'Do MMMM YYYY, dddd, h:mm:ss a'
                                )}{' '}
                              </Card.Text>
                            </Card.Body>
                            <Button
                              size='sm'
                              className='rounded'
                              onClick={() => editHandler(review._id)}
                            >
                              Edit
                            </Button>
                          </Card>
                          <h1></h1>
                        </>
                      )
                  )}
                </>
              )}
              {!userInfo ? (
                <Link to='/login'>
                  {' '}
                  <Button className='rounded'>Login/ Sign-up</Button>
                </Link>
              ) : (
                <>
                  {!isReviewPresent && (
                    <>
                      <Button className='rounded' onClick={createReviewHandler}>
                        Write your review!!
                      </Button>
                    </>
                  )}
                </>
              )}
            </Tab>
            <Tab eventKey='profile' title='What others think'>
              <h1></h1>
              {reviewData.length !== 0 ? (
                <>
                  {reviewData.map((review) => (
                    <>
                      <Card className='m-auto'>
                        <Card.Header>User: {review.userName}</Card.Header>
                        <Card.Body>
                          <Card.Title>
                            Rating:{' '}
                            <span>
                              <h3>
                                <strong>&nbsp;&nbsp;{review.userRating}</strong>
                              </h3>
                            </span>
                          </Card.Title>
                          <Card.Text>{review.review}</Card.Text>
                          <Card.Text>
                            Created @: &nbsp;
                            {moment(review.createdAt).format(
                              'Do MMMM YYYY, dddd, h:mm:ss a'
                            )}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <h1></h1>
                    </>
                  ))}
                </>
              ) : (
                <h5>Hurray!! Your are the first to review!!</h5>
              )}
            </Tab>
          </Tabs>
        </>
      )}
    </div>
  )
}

export default ShowInfoScreen
