import React from 'react'
import { Row, Col, Jumbotron, Button } from 'react-bootstrap'
import HomeScreenCard from '../components/HomeScreenCard'
import data from '../data'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <>
      <Jumbotron className='rounded'>
        <h1>Rev-Taku</h1>
        <p>Place for reviewing your favourite shows, series and movies.</p>
        <p>
          <Link to='/about'>
            <Button variant='primary' className='rounded'>
              Learn more
            </Button>
          </Link>
        </p>
      </Jumbotron>
      <Row>
        {data.map((show) => (
          <Col key={show._id} sm={12} md={6} lg={4} xl={3}>
            <HomeScreenCard show={show} />
          </Col>
        ))}
      </Row>
    </>
  )
}
export default HomeScreen
