import React from 'react'

const UserProfile = ({name, email, bio}) => {
  return (
    <div>
        <h1>Name - {name}</h1>
        <p>Email - {email}</p>
        <p>Bio - {bio}</p>
    </div>
  )
}

export default UserProfile;
