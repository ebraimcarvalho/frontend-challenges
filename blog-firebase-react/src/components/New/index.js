import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import firebase from '../../firebase'

function New() {
  let history = useHistory()
  const email = localStorage.email
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    let user = firebase.getCurrent()
    if (user) {
      console.log(user)
    } else {
      return history.push('/login')
    }
  }, [history])

  const enter = (e) => {
    e.preventDefault()
    if (title && url && description) {
      let posts = firebase.app.ref('posts')
      let key = posts.push().key
      posts.child(key).set({
        author: author,
        description: description,
        title: title,
        url: url,
      }).then(res => history.push('/'))
      .catch(error => console.log('Erro: ', error))
    } else {
      setError('Preenche os campos, boy!')
      return null
    }
  }

  // const create = () => {
  //   let posts = firebase.app.ref('posts')
  //   let key = posts.push().key
  //   posts.child(key).set({
  //     author: author,
  //     description: description,
  //     title: title,
  //     url: url,
  //   }).then(res => history.push('/'))
  //   .catch(error => console.log('Erro: ', error))
  // }

  return (
    <div className="container__newpost">
      <div className="newpost">
        <p>Hello, you are creating a new post as: {email}</p>
        <Link to="/dashboard">Go to Dashboard</Link>
        <form className="form" onSubmit={enter}>
          <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
          <input type="text" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)}/>
          <textarea type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <button type="submit">Create Post</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
      
    </div>
  )
}

export default New;