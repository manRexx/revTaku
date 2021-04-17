import React from 'react'
import { Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const Feed = () => {
  const dispatch = useDispatch()

  const userFeed = useSelector((state) => state.userFeed)
  const { feed, loading, error } = userFeed
  return (
    <d>
      <Alert variant='primary' className='rounded'>
        <center>
          <Alert.Heading>Hey, these are your current feed!!</Alert.Heading>
        </center>
      </Alert>
    </d>
  )
}

export default Feed
