import React, {useState} from 'react'
import {useHistory, withRouter} from 'react-router-dom'
import firebase from '../../firebase'
import './styles.css'

function Register() {
  let history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const enter = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please make sure all fields are filled in correctly')
      return null
    }
    setError('')
    register(email, password)
  }

  const register = (email, password) => {
    firebase.register(email, password)
      .then(result => {
        console.log(result)
        localStorage.email = email
        history.push('/dashboard')
      })
      .catch(error => {
        console.log('Error: ', error)
        setError(error.message)
      })
  }

  return(
    <div className="container__register">
      <div className="register">
        <form className="form">
          <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button className="button__register" onClick={enter}>New Register</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default withRouter(Register);