import React, {useState, useEffect} from 'react';
import firebase from '../../firebase'
import {Link} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('Você não está logado!')
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        alert('Usuário Logado com sucesso')
        console.log(user)
        setMsg(`Usuário logado com ${user.email}`)
        setUser(user.email)
      }
    })
  }, [])

  const createUserAuth = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('Bem vindo ' + email)
      })
      .catch((error) => {
        console.error(error.code)
        console.error(error.message)
        alert('Falha ao cadastrar, verifique o erro no console!')
      })
  }

  const signIn = (provider) => {
    console.log('entrou no signIn')
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log(result)
        var token = result.credential.accessToken
        setMsg('Bem vindo ' + result.user.displayName)
      })
      .catch((error) => {
        console.log(error)
        alert('Falha na autenticação!')
      })
  }

  const authUser = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result)
        setMsg('Bem vindo ' + email + '. Você está autenticado!')
      })
      .catch((error) => {
        console.error(error.code)
        console.error(error.message)
        alert('Falha ao autenticar, verifique o erro no console!')
      })
  }

  const githubAuth = (e) => {
    e.preventDefault()
    console.log('google')
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider)
  }

  const logoutUser = (e) => {
    e.preventDefault()
    firebase.auth().signOut()
      .then(() => {
        setMsg('Você saiu da conta!')
      })
      .catch((error) => {
        console.error(error.code)
        console.error(error.message)
        alert('erro ao sair!')
      })
  }

  return (
    <div>
      {user ? 
        <div>
          <h1>Painel Admin</h1>
          <p>Bem vindo, {user}</p>
          <button onClick={() => {
            firebase.auth().signOut().then(() => {
              setUser(null)
              setMsg('Você não está logado!')
            })
          }}>Sair</button>
        </div>
        :
        <div>
          <h3>Login</h3>
          <p>{msg}</p>
          <form>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br/>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br/>
          </form>
          <button onClick={authUser}>Autenticar</button>
          <br/>
          <button onClick={createUserAuth}>Cadastrar</button>
          <br/>
          <button onClick={logoutUser}>Logout</button>
          <br/>
          <hr/>
          <div>
            <button onClick={githubAuth}>Github</button>
            <br/>
          </div>
          <Link to="/Main">Ir para Home</Link>
          <br/>
          <Link to="/Create">Create User</Link>
          <p>email: {email}</p>
          <p>pass: {password}</p>
        </div>
      }
      
    </div>
  )
}

export default Login;