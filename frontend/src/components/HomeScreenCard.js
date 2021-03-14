import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomeScreenCard = ({ show }) => {
  return (
    <Card className='my-3 p-3 rounded' style={{ height: '28rem' }}>
      <Link to={`/show-info/${show._id}`}>
        <Card.Img src={show.image} variant='top' style={{ height: '18rem' }} />
      </Link>

      <Card.Body>
        <Link to={`/show-info/${show._id}`}>
          <Card.Title as='div'>
            <h5>
              <strong>{show.originalTitle}</strong>
            </h5>
          </Card.Title>
        </Link>

        {/* <Card.Text as='div'>
          <div className='my-3'>{show.originalTitle}</div>
        </Card.Text> */}

        {/* <Card.Text as='h3'>
          <p>{show.originalTitle}</p>
        </Card.Text> */}
      </Card.Body>
    </Card>
  )
}

export default HomeScreenCard
