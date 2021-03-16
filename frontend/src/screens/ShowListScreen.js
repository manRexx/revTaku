import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listShows } from '../actions/showActions'

const ShowListScreen = ({ history, match }) => {
  const dispatch = useDispatch()

  const showList = useSelector((state) => state.showList)
  const { loading, error, shows } = showList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  console.log(shows)

  useEffect(() => {
    if (!userInfo.isAdmin) {
      history.push('/login')
    }

    dispatch(listShows())
  }, [dispatch, history, userInfo])

  const deleteHandler = (id) => {
    console.log('delete')
  }
  const createProductHandler = () => {
    console.log('show created')
  }

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Shows</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createProductHandler}>
            <i className='fas fa-plus'></i> Create Product
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varient='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Original Name</th>
                <th>Is Adult?</th>
                <th>Movie</th>
                <th>Series</th>
                <th>Anime</th>
                <th>Rating</th>
                <th></th>
                <th></th>
              </tr>{' '}
            </thead>

            <tbody>
              {shows.map((show) => (
                <tr key={show._id}>
                  <td>{show._id}</td>
                  <td>{show.originalTitle}</td>
                  <td>{show.isAdult ? 'Yes' : '-'}</td>
                  <td>{show.isMovie ? 'Yes' : '-'}</td>
                  <td>{show.isSeries ? 'Yes' : '-'}</td>
                  <td>{show.isAnime ? 'Yes' : '-'}</td>
                  <td>{show.rating}</td>
                  <td>
                    <center>
                      <Button varient='light' className='btn-sm m-auto'>
                        <i className='fas fa-edit'>Edit</i>
                      </Button>
                    </center>
                  </td>
                  <td>
                    <center>
                      <Button
                        varient='danger'
                        className='btn-sm m-auto'
                        type='rounded'
                      >
                        <i className='fas fa-trash'>Delete</i>
                      </Button>
                    </center>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  )
}

export default ShowListScreen
