import React from 'react';

function Repos({repos}) {
  return (
    <div>
      {repos.map(repo => (
        <p key={repo.id}>{repo.name}</p>
      ))}
    </div>
  )
}

export default Repos;