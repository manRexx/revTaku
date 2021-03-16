import React, { useEffect } from 'react'
import { Row, Col, Jumbotron, Button } from 'react-bootstrap'
import HomeScreenCard from '../components/HomeScreenCard'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listShows } from '../actions/showActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const MovieScreen = () => {
  const dispatch = useDispatch()

  const showList = useSelector((state) => state.showList)
  const { error, shows, loading } = showList

  useEffect(() => {
    dispatch(listShows())
  }, [dispatch])

  return (
    <>
      <Jumbotron className='rounded'>
        <h2>Movies</h2>
        <p>Here are the list of movies in our database!!</p>
      </Jumbotron>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
        <Row>
          {shows.map(
            (show) =>
              show.isMovie && (
                <Col key={show._id} sm={12} md={6} lg={4} xl={3}>
                  <HomeScreenCard show={show} />
                </Col>
              )
          )}
        </Row>
      )}
    </>
  )
}

export default MovieScreen
