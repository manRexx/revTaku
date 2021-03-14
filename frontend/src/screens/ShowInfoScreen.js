import React from 'react'
import { Image, Row, Col, Button, Badge } from 'react-bootstrap'
import { Link } from 'react-router-bootstrap'

const ShowInfoScreen = () => {
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
  }

  return (
    <div>
      <h2>{data.originalTitle}</h2>
      <Row>
        <Col lg={4} className='m-3'>
          <center>
            <Image src={data.image} fluid />
          </center>
          <div className='p-2'>
            <center>
              {data.isMovie && (
                <Badge pill variant='warning'>
                  Movie
                </Badge>
              )}{' '}
              {data.isSeries && (
                <Badge pill variant='primary'>
                  Series
                </Badge>
              )}{' '}
              {data.isAnime && (
                <Badge pill variant='danger'>
                  Anime
                </Badge>
              )}
            </center>
          </div>
        </Col>
        <Col className='m-auto'>
          <Row className='m-auto'>
            <p>{data.description}</p>
          </Row>
          <Row className='m-auto'>
            <a href={data.trailerLink} target='blank'>
              {' '}
              <Button variant='danger' size='lg' className='rounded'>
                View Trailer on Youtube
              </Button>
            </a>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ShowInfoScreen
