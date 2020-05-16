import React, { useState, useEffect } from 'react';
import api from './services/api'

import Search from './components/Search'
import Persona from './components/Persona'

function App() {
  const [name, setName] = useState('')
  const [info, setInfo] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(false)

  function handleChange(e) {
    setName(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setIsFetching(true)
    setInfo(false)
    getApi()
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
        setError(true)
      })
  }

  return (
    <div className="App">
      <Search name={name} handleChange={handleChange} getSearch={getSearch}/>
      {!!info && <Persona data={info} />}
      {!!error && <p>Erro na requisição. Usuário não encontrado!</p>}
    </div>
  );
}

export default App;
