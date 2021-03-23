import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createReview } from '../actions/reviewActions'
import { Row, Col, ListGroup, Form, Button } from 'react-bootstrap'

const ShowReviewFromUserScreen = () => {
  const dispatch = useDispatch()

  const [askReview, setAskReview] = useState('')
  const [askRating, setAskRating] = useState(0)

  const showDetail = useSelector((state) => state.showDetail)
  const { error, loading, show } = showDetail

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(askRating)
    console.log(askReview)
    // dispatch(createReview())
  }

  return (
    <>
      <div className='emptyHeight'></div>
      <h2>
        Write your thoughts on{' '}
        <strong>
          <u>{show.originalTitle}</u>
        </strong>
      </h2>
      <div className='emptyHeight'></div>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item>
              Writer name: <strong>{userInfo.name}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              Show name: <strong>{show.originalTitle}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              Rev-Taku id: <strong>{show._id}</strong>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Form onSubmit={() => submitHandler(askRating, askReview)}>
            <Form.Group controlId='rating'>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                as='input'
                placeholder='Enter rating'
                value={askRating}
                onChange={(e) => setAskRating(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='review'>
              <Form.Label>Review</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='Enter review'
                value={askReview}
                onChange={(e) => setAskReview(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default ShowReviewFromUserScreen
