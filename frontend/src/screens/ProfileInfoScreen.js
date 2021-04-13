import React from 'react'

const ProfileInfoScreen = ({ match }) => {
  const requestedUserID = match.params.userID
  return <>{requestedUserID}</>
}

export default ProfileInfoScreen
