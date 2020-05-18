import React from 'react';
import './styles.css'

function Persona({data, getRepos, repos}) {
  const info = data.info
  return (
    <div className='persona'>
      <div className='persona__top'>
        <div className="persona__top-img">
          <img className='persona__top-photo' src={info.avatar_url} alt={info.name} />
        </div>
        <div className='persona__info'>
          <p className='persona__info-name'>Name: {info.name}</p>
          <p className='persona__info-bio'>Bio: {info.bio}</p>
          <p className='persona__info-hire'>Hireable: {info.hireable ? 'Yes' : 'No'}</p>
          <p className='persona__info-site'>Site: <a href={info.blog} target='_blank' rel="noopener noreferrer">{info.blog.replace(/^(https?):\/\//, '')}</a></p>
          {!!info.company && <p className='persona__info-company'>Company: {info.company}</p>}
          <p className='persona__info-following'>Following: {info.following}</p>
          <p className='persona__info-followers'>Followers: {info.followers}</p>
        </div>
      </div>
      <div className='persona__buttons'>
        <button value='repos' onClick={getRepos}>Get Repos</button>
        <button value='starred' onClick={getRepos}>Get Starred</button>
      </div>      
    </div>
  )
}

export default Persona;