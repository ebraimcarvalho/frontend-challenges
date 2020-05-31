import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom'
import firebase from '../../firebase'

function New() {
  let history = useHistory();
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
    if (!title || !url || !description) {
      setError('Preenche os campos, boy!')
      return null
    }
    setError('')
    create()
  }

  const create = () => {
    console.log('create post with', author, title, url, description)
  }

  return (
    <div className="container__newpost">
      <div className="newpost">
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