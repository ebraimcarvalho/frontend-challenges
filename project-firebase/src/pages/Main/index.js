import React, {useState, useEffect} from 'react'
import firebase from '../../firebase'

const Main = () => {
  const [token, setToken] = useState('Carregando...')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [list, setList] = useState([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    firebase.database().ref('token').on('value', (snapshot) => {
      setToken(snapshot.val())
    });
    firebase.database().ref('users').child(1).on('value', (snapshot) => {
      setName(snapshot.val().name)
    });
    firebase.database().ref('users').on('value', (snapshot) => {
      let state = [];
      snapshot.forEach((childItem) => {
        state.push({
          key: childItem.key,
          name: childItem.val().name,
          age: childItem.val().age
        })
      })
      setList(state)
    })
  }, [])

  const addToken = (e) => {
    e.preventDefault()
    var data = {
      name: name,
      age: age

    }
    firebase.database().ref('users').push(data)
    // let users = firebase.database().ref('users')
    // let key = users.push().key
    // users.child(key).set({
    //   name: 'Ebra 2 teste',
    //   age: 29
    // })
  }

  const inputFile = (e) => {
    let file = e.target.files[0]
    let storageRef = firebase.storage().ref('arquivos/' + file.name)
    let task = storageRef.put(file)
    task.on('state_changed', 
      function progress(snapshot) {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(percentage)
      },
      function error(err) {
        console.log(err)
      },
      function complete() {
        alert('envio completo!')
      }
    )
  }
  
  return (
    <div>
      <h3>Token: {token}</h3>
      <p>Hello World, I'm {name}</p>

      <form onSubmit={addToken}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="age">Age: </label>
        <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

      {list.map(child => (
        <div key={child.key}>
          <p>ID: {child.key}</p>
          <p>name: {child.name}</p>
          <p>age: {child.age}</p>
          <hr/>
        </div>
      ))}

      <div>
        <progress value={progress} max={100}></progress>
        <br/>
        <input type="file" onChange={inputFile} />
      </div>

    </div>
  )
}

export default Main
