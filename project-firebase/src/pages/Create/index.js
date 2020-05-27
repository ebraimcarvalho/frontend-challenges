import React, {useState, useEffect} from 'react'
import firebase from '../../firebase'

const Create = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    firebase.auth().signOut().then(() => {
      console.log('deslogou na primeira entrada da pagina!')
    })
  }, [])

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const createUser = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('usuário cadastrado no banco de dados', name, email, password)

        firebase.auth().onAuthStateChanged((user) => {
          console.log('entrou no state change', name, email, password)
          if(user) {
            console.log('tem usuario', name)
            firebase.database().ref('users').child(user.uid).set({
              name: name
            })
          }
        })
      })
      .catch((err) => {
        console.error('Erro: ' + err.message)
      })
  }

  return (
    <div>
      <h1>Create</h1>
      <form onSubmit={createUser}>
        <input type="text" value={name} name="setName" placeholder="Name" onChange={handleName} />
        <input type="text" value={email} placeholder="Email" onChange={handleEmail} />
        <input type="text" value={password} placeholder="Password" onChange={handlePassword} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export default Create