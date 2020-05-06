import React from 'react'

const Infos = ({ title, info }) => (
  <div className="info">
    <h3 className="info__title">{title.toUpperCase()}</h3>
    {info.map((item, index) => (
      <div className="info__list" key={index}>
        <p className="info__name">{item.name.toUpperCase()}</p>
        <p className="info__date">{item.date}</p>
        <p className="info__description">{item.description}</p>
      </div>
    ))}
  </div>
)

export default Infos