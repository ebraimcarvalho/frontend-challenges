import React from 'react'

const Contact = ({ title, contact }) => (
  <div>
    <h3>{title}</h3>
    {Object.keys(contact).map((item, index) => (
      <p key={index}>{contact[item]}</p>
    ))}
  </div>
)

export default Contact