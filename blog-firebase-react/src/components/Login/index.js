import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './styles.css'

function Login() {
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

  const login = (email, password) => {
    console.log('logar com email', email, password)
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