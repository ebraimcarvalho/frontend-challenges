import React from 'react'

const Cover = ({ state }) => (
  <div className="cover">
    <img className="cover__img" src={state.image} alt="logo"/>
    <h1>{state.name}</h1>
      <p>{state.profession}</p>
      <hr/>        
  </div>
)

export default Cover