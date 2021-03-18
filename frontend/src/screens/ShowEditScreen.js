import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
// import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'

const ShowEditScreen = () => {
  // const showId = match.params.id
  // console.log(showId)

  // const [originalTitle, setOriginalTitle] = useState('')
  // const [isSeries, setIsSeries] = useState(false)
  // const [image, setImage] = useState('')
  // const [isMovie, setIsMovie] = useState(false)
  // const [isAnime, setIsAnime] = useState(false)
  // const [trailerLink, setTrailerLink] = useState('')
  // const [description, setDescription] = useState('')
  // const [genres, setGenres] = useState([])
  // const [dateOfRelease, setDateOfRelease] = useState('')
  // const [isAdult, setIsAdult] = useState(false)
  // const [language, setLanguage] = useState([])

  // const dispatch = useDispatch()

  // const productDetails = useSelector((state) => state.productDetails)
  // const { loading, error, product } = productDetails

  // const productUpdate = useSelector((state) => state.productUpdate)
  // const {
  //   loading: loadingUpdate,
  //   error: errorUpdate,
  //   success: successUpdate,
  // } = productUpdate

  // useEffect(() => {
  //   if (successUpdate) {
  //     dispatch({ type: PRODUCT_UPDATE_RESET })
  //     history.push('/admin/productlist')
  //   } else {
  //     if (!product.name || product._id !== productId) {
  //       dispatch(listProductDetails(productId))
  //     } else {
  //       setName(product.name)
  //       setPrice(product.price)
  //       setImage(product.image)
  //       setBrand(product.brand)
  //       setCategory(product.category)
  //       setCountInStock(product.countInStock)
  //       setDescription(product.description)
  //     }
  //   }
  // }, [product, productId, dispatch, history, successUpdate])

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   dispatch(
  //     updateProduct({
  //       _id: productId,
  //       name,
  //       price,
  //       image,
  //       brand,
  //       category,
  //       countInStock,
  //       description,
  //     })
  //   )
  // }
  return (
    <>
      {/* <Link to='/admin/productlist' className='btn btn-light my-3'>
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
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='Price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
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
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='brand'>
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Brand'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>CountInStock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter countInStock'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer> */}
    </>
  )
}

export default ShowEditScreen
