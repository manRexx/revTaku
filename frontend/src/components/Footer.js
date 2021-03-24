import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <nav class='bg-primary'>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; revtaku</Col>
        </Row>
      </Container>
    </nav>
  )
}

export default Footer
