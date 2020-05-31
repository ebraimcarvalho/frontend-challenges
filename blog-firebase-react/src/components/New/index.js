import React, {useState, useEffect} from 'react';
import {Link, useHistory, withRouter} from 'react-router-dom'
import firebase from '../../firebase'
import './styles.css'

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
    if (!user) {
      return history.push('/login')
    }
  }, [history])

  const enter = (e) => {
    e.preventDefault()
    if (!title || !url || !description) {
      setError('Please make sure all fields are filled in correctly')
      return null
    }
    create()
  }

  const create = () => {
    let posts = firebase.app.ref('posts')
    let key = posts.push().key
    posts.child(key).set({
      author: author,
      description: description,
      title: title,
      url: url,
    }).then(res => history.push('/'))
    .catch(error => console.log('Erro: ', error))
  }

  return (
    <div className="container__newpost">
      <div className="newpost">
        <h3 className="newpost__title">Create a New Post</h3>
        <p>Hello, you are creating a new post as: {email}</p>
        <Link to="/dashboard" className="link__dashboard"><button className="btn__dashboard">Go to Dashboard</button></Link>
        <form className="form" onSubmit={enter}>
          <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
          <input type="text" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)}/>
          <textarea className="textarea" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          <button className="btn__create-post" type="submit">Create Post</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
      
    </div>
  )
}

export default withRouter(New);