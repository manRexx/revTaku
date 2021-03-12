import React from 'react'
import { Card } from 'react-bootstrap'

const Cards = ({ show }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href='/'>
        <Card.Img src={product.image} variant='top' />
      </a>

      <Card.Body>
        <a href='/'>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as='div'>
          <div className='my-3'>
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>

        <Card.Text as='h3'>
          <h3>Rs {product.price}</h3>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cards
