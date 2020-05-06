import React from 'react'

const Contact = ({ title, contact }) => (
  <div className="profile">
    <h3 className="profile__title">{title.toUpperCase()}</h3>
    {Object.keys(contact).map((item, index) => (
      <p className="profile__description" key={index}>{contact[item]}</p>
    ))}
  </div>
)

export default Contact