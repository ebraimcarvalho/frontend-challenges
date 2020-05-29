import React, {useState, useEffect} from 'react';
import {withRouter, Link} from 'react-router-dom';
import './styles.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [inputController, setInputController] = useState('')

  const enter = (e) => {
    e.preventDefault()
    if(!email || !password) {
      setError('Preenche os campos, boy!')
      setInputController('inputController')
      return null
    }
    setError('')
    setInputController('')
    login(email, password)
  }

  const login = (email, password) => {
    console.log('logar com email', email, password)
  }

  return (
    <div className="container__login">
      <div className="login">
        <form className="form" onSubmit={enter}>
          <input className={inputController} type="text" placeholder="Name" value={email} autoFocus onChange={(e) => setEmail(e.target.value)} />
          <input className={inputController} type="password" placeholder="Name" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="login__btn">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
      <div className="register">
        <p className="register__msg">Não é cadastrado?</p>
        <Link to="/register"><button className="register__btn">Cadastrar</button></Link>
      </div>      
      <p>Name: {email} | Password: {password}</p>
    </div>
  )
}

export default withRouter(Login);