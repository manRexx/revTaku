import React from 'react'
import { Card } from 'react-bootstrap'

const HomeScreenCard = ({ show }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href='/'>
        <Card.Img src={show.image} variant='top' />
      </a>

      <Card.Body>
        <a href='/'>
          <Card.Title as='div'>
            <h5>
              <strong>{show.originalTitle}</strong>
            </h5>
          </Card.Title>
        </a>

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