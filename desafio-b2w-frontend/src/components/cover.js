import React from 'react'

const Cover = ({ state }) => (
  <div className="cover">
    <div className="cover__div-img">
      <img className="cover__img" src={state.image} alt="logo"/>
    </div>
    <h1 className="cover__name">{state.name.toUpperCase()}</h1>
    <p className="cover__profession">{state.profession.toUpperCase()}</p>
    <hr/>        
  </div>
)

export default Cover