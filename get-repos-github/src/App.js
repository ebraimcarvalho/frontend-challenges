import React, { useState } from 'react';
import api from './services/api'

import Search from './components/Search'
import Persona from './components/Persona'
import Repos from './components/Repos'

function App() {
  const [name, setName] = useState('')
  const [lastuser, setLastuser] = useState('')
  const [info, setInfo] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(false)
  const [repos, setRepos] = useState(false)
  const [typeRepo, setTypeRepo] = useState('')

  function handleChange(e) {
    setName(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setRepos(false)
    setIsFetching(true)
    setInfo(false)
    getApi()
    setLastuser(name)
    setName('')
  }

  const getApi = () => {    
    api.get(`${name}`)
      .then(response => {
        setInfo({
          info: response.data
        })
        setIsFetching(false)
        setError(false)
      })
      .catch((e) => {
        setIsFetching(false)
        setError(true)
      })
  }

  const getRepos = (type) => {
    type = type.target.value
    api.get(`${lastuser}/${type}`)
      .then(response => {
        setRepos(response.data)
        setTypeRepo(type)
      })
  }

  return (
    <div className="App">
      <Search name={name} handleChange={handleChange} getSearch={getSearch}/>
      {!!isFetching && <p className='searching-msg'>Searching user...</p>}
      {!!error && <p>Request error. User not found!</p>}
      {!!info && <Persona data={info} getRepos={getRepos} repos={repos} />}
      {!!repos && <Repos repos={repos} typeRepo={typeRepo} user={lastuser} />}
    </div>
  );
}

export default App;
