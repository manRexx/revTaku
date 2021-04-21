import axios from 'axios'
import React, { useState } from 'react'
import { Alert, Card, Form, Col, Button, Container } from 'react-bootstrap'

const AboutScreen = () => {
  return (
    <>
      <Alert variant='success' className='rounded'>
        <Alert.Heading>
          <strong>Contributors</strong>
        </Alert.Heading>
        <p>
          Support our project by providing info of your favourite shows which
          are not in our database!!
        </p>
      </Alert>
      <Card className='rounded'>
        <Card.Header as='h5'>
          <strong>Key points before adding any show's information</strong>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <i class='fas fa-hand-point-right'></i>&nbsp;&nbsp; Search show name
            in the searchbox, if the show doesn't appear then provide info of
            the show
          </Card.Text>
          <Card.Text>
            <i class='fas fa-hand-point-right'></i>&nbsp;&nbsp; Give original
            title of the show
          </Card.Text>
          <Card.Text>
            <i class='fas fa-hand-point-right'></i>
            <strong>
              &nbsp;&nbsp; BAD & GOOD Examples:-&nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; DDLJ&nbsp;&nbsp;
              <i class='far fa-times-circle'></i>&nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; Dilwale Dulhania Le Jayenge&nbsp;&nbsp;
              <i class='far fa-check-circle'></i>
            </strong>
          </Card.Text>
          <Card.Text>
            <i class='fas fa-hand-point-right'></i>&nbsp;&nbsp; Once we verify
            the correctness of the data provided we add your show in the
            database!! 💪 💪
          </Card.Text>
        </Card.Body>
      </Card>

      <div className='emptyHeightSmall'></div>

      <div className='containerForm'>
        <iframe
          class='responsive-iframe'
          src='https://docs.google.com/forms/d/e/1FAIpQLSfmZ7F-AkOQ6slFZ6SrXZBICvr2wHcV0LfzTOPSEkyRRdTrrg/viewform?embedded=true'
        >
          Loading...
        </iframe>
      </div>
    </>
  )
}

export default AboutScreen
