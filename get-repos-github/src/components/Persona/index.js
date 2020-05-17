import React from 'react';
import Repos from '../Repos'

function Persona({data, getRepos, repos}) {
  const info = data.info
  return (
    <div>
      <div>
        <img width='200' src={info.avatar_url} alt={info.name} />
        <p>Name: {info.name}</p>
        <p>Bio: {info.bio}</p>
        <p>Hireable: {info.hireable ? 'Yes' : 'No'}</p>
        <p>Site: {info.blog}</p>
        <p>Comapany: {info.company}</p>
        <p>Following: {info.following}</p>
        <p>Followers: {info.followers}</p>
        <div>
          <button value='repos' onClick={getRepos}>Get Repos</button>
          <button value='starred' onClick={getRepos}>Get Starred</button>
        </div>
        <div>
          {!!repos && <Repos repos={repos} />}
        </div>
      </div>
    </div>
  )
}

export default Persona;