import React from 'react';

function Repos({repos, typeRepo, user}) {
  let type = typeRepo === 'repos' ? 'repositories' : 'stars'
  return (
    <div className='repos'>
      {repos.map(repo => (
        <div key={repo.id} className="repo">
          <p className='repo__name'>{repo.name}</p>
          <p className='repo__description'>{repo.description}</p>
          <p className='repo__link'><a href={repo.html_url} target='_blank' rel="noopener noreferrer">{repo.html_url}</a></p>
        </div>
      ))}
      <a href={`https://github.com/${user}?tab=${type}`} target='_blank' rel="noopener noreferrer">Go to all {type}</a>
    </div>
  )
}

export default Repos;