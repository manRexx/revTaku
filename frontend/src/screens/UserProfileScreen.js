import React from 'react'
import { Jumbotron, Row, Col, Image, Card } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

const UserProfileScreen = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const image_URL =
    'https://i.pinimg.com/originals/29/24/89/292489e7d0bf8ce7d5ffd81be62d0800.png'

  const reviews = [
    {
      showId: '605037d986af257136bef8c7',
      originalTitle: 'Demon Slayer: Mugen Train',
      rev: `This movie just made my day a whole lot better. It is nothing but a masterpiece from Ufotable. The animation, the soundtrack, the music, the emotion is just amazing. I couldn't hold back my tears because of how much emotion there is in this movie. I would recommend this movie to everyone but PLEASE do your best to protect yourself from the coronavirus. The pandemic situation in my country is slowly escalating, but not severe. This movie might be released on Blu-ray or whatever so that you can watch it at home. It is your choice to either wait or go out right now. I am excited for the second season of this series and I can't wait to see what happens next. Stay safe!`,
      createdAt: '15 December 2020',
      rating: 10,
    },
    {
      showId: '605037d986af257136bef8c8',
      originalTitle: 'Dark',
      rev: `Masterpiece movie pure masterpiece in every espects like plot
          twist were crazy story was beautiful and the dream stuff was my
          fav stuff and literlly highlight there characters in such a
          short time and this impactfully intersting concept like how they
          depicted their soul realm way to intersting and the way things
          sets up so effortlessly only demon slayer can do this extremely
          emothional movie and my eyes were so teary and cried like a
          madman can't express the feeling one thing more when rengoku
          said set your heart ablaze it wasn't only words things you know
          he actually did In the movie his heart was literlly on 🔥 fire
          it was so hype moment personally not only anime wise literlly
          one of the best movie to exist there was everything realistic
          comedy ,Beautiful and interesting plot ,action, mysterious wibe
          ,intense, sadness and has one of the best anime fights easily
          ost were good voice acting was extremely good and animation was
          just way too good obviously it's ufotable no doubt there the
          movie will literlly gonna pierce your heart 😔 and this dude
          Rengoku is a G. O. A. T hands down one of the best written anime
          character Overall a Masterpiece movie`,
      createdAt: '16 July 2020',
      rating: 9,
    },
  ]

  return (
    <>
      <Jumbotron className='rounded'>
        <Row className='m-auto p-3'>
          <Col xs={6} md={4}>
            <center>
              {' '}
              <Image
                src={image_URL}
                roundedCircle
                style={{ height: '12rem' }}
              />
            </center>
          </Col>
          <Col className='my-auto'>
            <h1>
              Hello, <strong>{userInfo.name}!</strong>
            </h1>
            <h3>
              You registered email:{' '}
              <strong>
                <u>{userInfo.email}</u>
              </strong>
            </h3>
            {userInfo.isAdmin && (
              <>
                <h3>
                  <strong>This is a Admin Account</strong>
                </h3>
              </>
            )}
          </Col>
        </Row>
      </Jumbotron>
      <h1>Your Reviews</h1>

      {reviews.map((review) => (
        <Card className='text-center'>
          <Card.Header>{review.originalTitle}</Card.Header>
          <Card.Body>
            <Card.Title>
              Your rating:{' '}
              <span>
                <h3>
                  <strong>{review.rating}</strong>
                </h3>
              </span>
            </Card.Title>
            <Card.Text>{review.rev}</Card.Text>
            <Card.Text>Created @: {review.createdAt}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default UserProfileScreen
