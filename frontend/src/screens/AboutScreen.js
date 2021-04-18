import axios from 'axios'
import React, { useState } from 'react'
import { Alert, Card, Form, Col, Button } from 'react-bootstrap'

const AboutScreen = () => {
  const [trailer, setTrailer] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [DOR, setDOR] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(trailer)
    console.log(title)
    console.log(description)
    console.log(DOR)

    await axios.post('/api/shows/show', {
      trailer: trailer,
      title: title,
      description: description,
      DOR: DOR,
    })

    setTrailer('')
    setTitle('')
    setDescription('')
    setDOR('')
  }
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
      <Card className='p-3 rounded'>
        <Form className='m-3 p-3' onSubmit={submitHandler}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Original Title</Form.Label>
              <Form.Control
                placeholder='Enter Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>
                Trailer Link&nbsp;&nbsp; {`{provide first trailer link}`}
              </Form.Label>
              <Form.Control
                placeholder='Trailer Link'
                value={trailer}
                onChange={(e) => setTrailer(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>Date of Release</Form.Label>
              <Form.Control
                value={DOR}
                onChange={(e) => setDOR(e.target.value)}
                placeholder='Date of Release'
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId='formGridAddress1'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='...'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Button variant='primary' type='submit' className='rounded'>
            Submit
          </Button>
        </Form>
      </Card>
    </>
  )
}

export default AboutScreen
