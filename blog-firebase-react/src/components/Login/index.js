import React, { useState } from 'react';
import { withRouter, Link, useHistory } from 'react-router-dom';
import firebase from '../../firebase'
import './styles.css'

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const enter = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Preenche os campos, boy!')
      return null
    }
    setError('')
    login(email, password)
  }

  const login = async (email, password) => {
    let mount = false
    await firebase.login(email, password)
      .then(result => {
        mount = true
      })
      .catch(error => {
        console.log('Error: ', error)
        setError(error.message)
      })
    setEmail('')
    setPassword('')
    return mount ? history.push('/') : ''
  }

  return (
    <div className="container__login">
      <div className="login">
        <form className="form" onSubmit={enter}>
          <input type="text" placeholder="Name" value={email} autoFocus onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="login__btn">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
      <div className="register">
        <p className="register__msg">Ainda não possui uma conta?</p>
        <Link to="/register" className="register__btn">Criar uma conta</Link>
      </div>
    </div>
  )
}

export default withRouter(Login);