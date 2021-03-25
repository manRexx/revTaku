import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { SHOW_UPDATE_RESET } from '../constants/showConstants'
import { listShowDetail, updateShow } from '../actions/showActions'

const ShowEditScreen = ({ match, history }) => {
  const showId = match.params.id

  const [originalTitle, setOriginalTitle] = useState('') //DONE
  const [isSeries, setIsSeries] = useState('')
  const [image, setImage] = useState('') //DONE
  const [isMovie, setIsMovie] = useState('')
  const [isAnime, setIsAnime] = useState('')
  const [trailerLink, setTrailerLink] = useState('') //DONE
  const [description, setDescription] = useState('') //DONE
  const [genres, setGenres] = useState([])
  const [dateOfRelease, setDateOfRelease] = useState('') //DONE
  const [isAdult, setIsAdult] = useState('')
  const [language, setLanguage] = useState([])
  const [genreString, setGenreString] = useState('')
  var data = []

  const dispatch = useDispatch()

  const showDetail = useSelector((state) => state.showDetail)
  const { loading, error, show } = showDetail

  const showUpdate = useSelector((state) => state.showUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = showUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: SHOW_UPDATE_RESET })
      history.push('/admin/showlist')
    } else {
      if (!show.originalTitle || show._id !== showId) {
        dispatch(listShowDetail(showId))
      } else {
        setOriginalTitle(show.originalTitle)
        setIsSeries(show.isSeries)
        setImage(show.image)
        setIsMovie(show.isMovie)
        setIsAnime(show.isAnime)
        setTrailerLink(show.trailerLink)
        setDescription(show.description)
        setGenres(show.genres)
        setDateOfRelease(show.dateOfRelease)
        {
          show.isAdult === true ? setIsAdult('true') : setIsAdult('false')
        }
        {
          show.isMovie === true ? setIsMovie('true') : setIsMovie('false')
        }
        {
          show.isSeries === true ? setIsSeries('true') : setIsSeries('false')
        }
        {
          show.isAnime === true ? setIsAnime('true') : setIsAnime('false')
        }
        setLanguage(show.language)
        setGenreString(show.genres.join(' '))
      }
    }
  }, [show, showId, dispatch, history, successUpdate])

  const submitHandler = async (e) => {
    e.preventDefault()

    dispatch(
      updateShow({
        _id: showId,
        originalTitle,
        isSeries: isSeries === 'true' ? true : false,
        image,
        isMovie: isMovie === 'true' ? true : false,
        isAnime: isAnime === 'true' ? true : false,
        trailerLink,
        description,
        genres: genreString.split(' '),
        dateOfRelease,
        isAdult: isAdult === 'true' ? true : false,
        language,
      })
    )
  }
  return (
    <>
      <Link to='/admin/showlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Show</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message varient='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message varient='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='originalTitle'>
              <Form.Label>Original-Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Original-Title'
                value={originalTitle}
                onChange={(e) => setOriginalTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='genres'>
              <Form.Label>
                Genres <strong>{`{write with space-sepreted}`}</strong>
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Genres'
                value={genreString}
                onChange={(e) => setGenreString(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='isAdult'>
              <Form.Label>
                isAdult<strong> {`{write true in lowercase}`}</strong>
              </Form.Label>
              <Form.Control
                type='text'
                value={isAdult}
                onChange={(e) => setIsAdult(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='isMovie'>
              <Form.Label>
                isMovie<strong> {`{write true in lowercase}`}</strong>
              </Form.Label>
              <Form.Control
                type='text'
                value={isMovie}
                onChange={(e) => setIsMovie(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='isSeries'>
              <Form.Label>
                isSeries<strong> {`{write true in lowercase}`}</strong>
              </Form.Label>
              <Form.Control
                type='text'
                value={isSeries}
                onChange={(e) => setIsSeries(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='isAnime'>
              <Form.Label>
                isAnime<strong> {`{write true in lowercase}`}</strong>
              </Form.Label>
              <Form.Control
                type='text'
                value={isAnime}
                onChange={(e) => setIsAnime(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='trailer'>
              <Form.Label>Trailer Link</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Trailer link'
                value={trailerLink}
                onChange={(e) => setTrailerLink(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='releaseDate'>
              <Form.Label>Date of Release</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter date of release'
                value={dateOfRelease}
                onChange={(e) => setDateOfRelease(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default ShowEditScreen
