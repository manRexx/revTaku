import React, { useEffect } from 'react'
import { Alert, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { feed } from '../actions/userActions'
import { Link } from 'react-router-dom'

const Feed = () => {
  const dispatch = useDispatch()

  const userFeed = useSelector((state) => state.userFeed)
  const { feed: feedData, loading, error } = userFeed

  useEffect(() => {
    dispatch(feed())
  }, [dispatch])

  return (
    <>
      <Alert variant='primary' className='rounded'>
        <center>
          <Alert.Heading>Hey, these are your current feed!!</Alert.Heading>
        </center>
      </Alert>

      {!loading &&
        feedData &&
        feedData.map(
          (feed) =>
            feed.showName !== 'Sample Data' && (
              <>
                <Card className='text-center rounded'>
                  <Card.Header>
                    <a href={`/u/${feed.userId}`}>{feed.userName}</a> /{' '}
                    <a href={`/show-info/${feed.showId}`}>{feed.showName}</a>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      Rating:{' '}
                      <span>
                        <h3>
                          <strong>{feed.userRating}</strong>
                        </h3>
                      </span>
                    </Card.Title>

                    <Card.Text>{feed.review}</Card.Text>
                  </Card.Body>
                </Card>
                <h1></h1>
              </>
            )
        )}
    </>
  )
}

export default Feed
