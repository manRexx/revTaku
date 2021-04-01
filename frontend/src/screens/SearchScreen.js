import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listShows } from '../actions/showActions'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import HomeScreenCard from '../components/HomeScreenCard'

const SearchScreen = ({ match }) => {
  const keyword = match.params.keyword

  const dispatch = useDispatch()

  const showList = useSelector((state) => state.showList)
  const { error, shows, loading } = showList
  useEffect(() => {
    dispatch(listShows(keyword))
  }, [dispatch, keyword])

  return (
    <>
      <h1>
        Search results for{' '}
        <strong>
          <u>{keyword}</u>
        </strong>
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
        <Row>
          {shows.map((show) => (
            <Col key={show._id} sm={12} md={6} lg={4} xl={3}>
              <HomeScreenCard show={show} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default SearchScreen
