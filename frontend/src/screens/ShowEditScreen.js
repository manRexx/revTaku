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
  console.log(showId)

  const [originalTitle, setOriginalTitle] = useState('') //DONE
  const [isSeries, setIsSeries] = useState(false)
  const [image, setImage] = useState('') //DONE
  const [isMovie, setIsMovie] = useState(false)
  const [isAnime, setIsAnime] = useState(false)
  const [trailerLink, setTrailerLink] = useState('') //DONE
  const [description, setDescription] = useState('') //DONE
  const [genres, setGenres] = useState([])
  const [dateOfRelease, setDateOfRelease] = useState('') //DONE
  const [isAdult, setIsAdult] = useState(false)
  const [language, setLanguage] = useState([])

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
        setIsAdult(show.isAdult)
        setLanguage(show.language)
      }
    }
  }, [show, showId, dispatch, history, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateShow({
        _id: showId,
        originalTitle,
        isSeries,
        image,
        isMovie,
        isAnime,
        trailerLink,
        description,
        genres,
        dateOfRelease,
        isAdult,
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
        <h1>Edit Product</h1>
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

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
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
