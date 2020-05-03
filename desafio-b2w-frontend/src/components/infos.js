import React from 'react'

const Infos = ({ title, info }) => (
  <div>
    <h3>{title}</h3>
    {info.map((item, index) => (
      <div className="info" key={index}>
        <p className="info__name">{item.name}</p>
        <p className="info__date">{item.date}</p>
        <p className="info__description">{item.description}</p>
      </div>
    ))}
  </div>
)

export default Infos