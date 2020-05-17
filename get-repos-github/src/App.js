import React, { useState } from 'react';
import api from './services/api'

import Search from './components/Search'
import Persona from './components/Persona'

function App() {
  const [name, setName] = useState('')
  const [lastuser, setLastuser] = useState('')
  const [info, setInfo] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(false)
  const [repos, setRepos] = useState([])

  function handleChange(e) {
    setName(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setRepos([])
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
    console.log(lastuser)
    api.get(`${lastuser}/${type}`)
      .then(response => {
        console.log(response)
        setRepos(response.data)
      })
    console.log('request repos: ', type, repos)
  }

  return (
    <div className="App">
      <Search name={name} handleChange={handleChange} getSearch={getSearch}/>
      {!!isFetching && <p>Searching user...!</p>}
      {!!error && <p>Request error. User not found!</p>}
      {!!info && <Persona data={info} getRepos={getRepos} repos={repos} />}
    </div>
  );
}

export default App;
