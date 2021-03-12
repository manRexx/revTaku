import React from 'react'
import { Row, Col } from 'react-bootstrap'
import HomeScreenCard from '../components/HomeScreenCard'
import data from '../data'

const HomeScreen = () => {
  return (
    <>
      <h3>HomeScreen</h3>
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
