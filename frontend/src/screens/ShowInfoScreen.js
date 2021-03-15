import React, { useEffect } from 'react'
import {
  Image,
  Row,
  Col,
  Button,
  Badge,
  Jumbotron,
  Container,
  Alert,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listShowDetail } from '../actions/showActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ShowInfoScreen = ({ match, history }) => {
  const id = match.params.id

  const showDetail = useSelector((state) => state.showDetail)
  const { error, loading, show } = showDetail
  console.log(show)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listShowDetail(id))
  }, [dispatch])

  const data = {
    _id: 2,
    originalTitle: 'Demon Slayer: Kimetsu no Yaiba the Movie: Mugen Train',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg/220px-Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg',
    description:
      'A youth begins a quest to fight demons and save his sister after finding his family slaughtered and his sister turned into a demon.',
    isMovie: true,
    isSeries: false,
    isAnime: true,
    numberOfSeasons: 0,
    seasonInfo: [],
    trailerLink: 'https://youtu.be/ATJYac_dORw',
    genre: ['fantasy', 'action', 'drama'],
    isAdult: false,
    language: ['japanese'],
    dateOfRelease: '16 October 2020',
    rating: 9.25,
    reviews: [
      {
        userId: 14,
        name: 'Shabd',
        rev: `This movie just made my day a whole lot better. It is nothing but a masterpiece from Ufotable. The animation, the soundtrack, the music, the emotion is just amazing. I couldn't hold back my tears because of how much emotion there is in this movie. I would recommend this movie to everyone but PLEASE do your best to protect yourself from the coronavirus. The pandemic situation in my country is slowly escalating, but not severe. This movie might be released on Blu-ray or whatever so that you can watch it at home. It is your choice to either wait or go out right now. I am excited for the second season of this series and I can't wait to see what happens next. Stay safe!`,
        createdAt: '15 December 2020',
        rating: 10,
      },
      {
        userId: 16,
        name: 'manRexx',
        rev: `The movie’s full name is Kimetsu no yaiba Mugen train, the movie was officially released in Japan during October 16 2020 and the movie is going to be released in Malaysia on the 4th of February 2021. The director of the movie is a person called Haruo Sotozaki. The main voice actors for the movie are Natsuki Hanae, Akari Kito, Hiro shimono, Yoshitsugu Matsuoka, and Satoshi Hino.`,
        createdAt: '27 April 2020',
        rating: 8,
      },
      {
        userId: 2,
        name: 'daddy-daddy-do',
        rev: `The total series of demon slayer and this movie:Mugen Train have shown not only an energetic fight between demon hunters and demons but also an excellent touch of human emotions. Human bondings and emotions are prevalent throughout the series and the movie. The animation and sound tracks are no doubt superb. But the movie becomes very touchy bcos of Kyujuro Rengoku's death while fighting with Akaza....the end is saddening, makes the viewers cry.... At the end when Tanjiro shouts for the help to kill Akaza...the scenes are made in such a way as if viewers feel to come up to defeat Akaza. Mugen train is worth watching movie.Loved it.`,
        createdAt: '4 July 2020',
        rating: 9,
      },
      {
        userId: 3,
        name: 'Manik Rawat',
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
    ],
  }

  return (
    <div>
      <h2 className='m-auto p-3'>
        <strong>{show.originalTitle}</strong>
      </h2>
      <Row>
        <Col lg={4} className='m-3'>
          <center>
            <Image src={show.image} fluid />
          </center>
          <div className='p-2'>
            <center>
              {show.isMovie && (
                <Badge pill variant='warning'>
                  Movie
                </Badge>
              )}{' '}
              {show.isSeries && (
                <Badge pill variant='primary'>
                  Series
                </Badge>
              )}{' '}
              {show.isAnime && (
                <Badge pill variant='danger'>
                  Anime
                </Badge>
              )}
            </center>
          </div>
          <div>
            <center>
              <h5>
                {' '}
                <strong>Released at: {show.dateOfRelease}</strong>
              </h5>
              <h5>
                {' '}
                <strong>Is Adult: {show.isAdult ? 'true' : 'false'}</strong>
              </h5>
              <hr />
              <h5>Available in</h5>
              {show.language.map((lan) => (
                <h7>{lan} </h7>
              ))}
            </center>
          </div>
        </Col>
        <Col>
          <Jumbotron>
            <Row className='m-auto p-3'>
              {data.genre.map((gen) => (
                <Button>{gen}</Button>
              ))}
              <h5>
                <strong>ERROR</strong>
              </h5>
            </Row>
            <Row className='m-auto p-3'>
              <p>{show.description}</p>
            </Row>{' '}
            <Row className='m-auto p-3'>
              <a href={show.trailerLink} target='blank'>
                {' '}
                <Button variant='danger' size='lg' className='rounded'>
                  View Trailer on Youtube
                </Button>
              </a>
            </Row>
          </Jumbotron>
        </Col>
      </Row>
      <Row className='m-auto p-3'>
        <Col>
          <Jumbotron>
            <Container>
              <h2 className='m-auto p-3'>
                <strong>Your Review</strong>
              </h2>
              <p className='m-auto p-3'>
                Masterpiece movie pure masterpiece in every espects like plot
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
                character Overall a Masterpiece movie
              </p>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
      <Row className='m-auto p-3'>
        <Col>
          <Jumbotron variant='light'>
            <Container>
              <div className='m-auto p-3'>
                <h1>
                  <strong>What others think</strong>
                </h1>
              </div>

              {data.reviews.map((review) => (
                <Alert variant='secondary'>
                  <Alert.Heading>
                    {' '}
                    <strong>{review.name}</strong>
                  </Alert.Heading>
                  <hr />
                  <div className='m-auto p-3'>
                    <h6>
                      Posted at: <strong>{review.createdAt}</strong>
                    </h6>
                    <p>
                      <strong>{review.rev}</strong>
                    </p>
                    <h5>
                      <strong> Overall rating: {review.rating}</strong>
                      <i class='fas fa-stars'></i>
                    </h5>
                  </div>
                </Alert>
              ))}

              <Button>See more...</Button>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
    </div>
  )
}

export default ShowInfoScreen
