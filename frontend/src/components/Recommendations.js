import React from 'react'
import { Row, Col, Card, Badge } from 'react-bootstrap'
import { Link } from 'react-router-bootstrap'

const Recommendations = ({ shows }) => {
  return (
    <>
      Recommendations
      <Row>
        {shows.map((show) => (
          <Col>
            <Card className='my-3 p-3 rounded' style={{ height: '28rem' }}>
              <Link to={`/show-info/${show._id}`}>
                <Card.Img
                  src={show.image}
                  variant='top'
                  style={{ height: '18rem' }}
                />
              </Link>

              <Card.Body>
                <Link to={`/show-info/${show._id}`}>
                  <Card.Title as='div'>
                    <center>
                      <h5>
                        <strong>{show.originalTitle}</strong>
                      </h5>
                    </center>
                  </Card.Title>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Recommendations
