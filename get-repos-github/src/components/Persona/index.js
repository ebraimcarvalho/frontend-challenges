import React from 'react';

function Persona({data}) {
  const info = data.info
  return (
    <div>
      <div>
        <img src={info.avatar_url} alt={info.name} />
      </div>
      <p>Name: {info.name}</p>
      <p>Bio: {info.bio}</p>
      <p>Hireable: {info.hireable ? 'Yes' : 'No'}</p>
      <p>Site: {info.blog}</p>
      <p>Comapany: {info.company}</p>
      <p>Following: {info.following}</p>
      <p>Followers: {info.followers}</p>
    </div>
  )
}

export default Persona;