import React from 'react'

const Profile = ({ title, profile }) => (
  <div className="profile">
    <h3 className="profile__title">{title.toUpperCase()}</h3>
    <p className="profile__description">{profile}</p>
  </div>
)

export default Profile