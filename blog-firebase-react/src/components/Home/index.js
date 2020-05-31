import React, {useState, useEffect} from 'react';
import firebase from '../../firebase'
import './styles.css'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    firebase.app.ref('posts').once('value', (snapshot) => {
      let state = [];
      snapshot.forEach((childItem) => {
        state.push({
          key: childItem.key,
          title: childItem.val().title,
          author: childItem.val().author,
          url: childItem.val().url,
          description: childItem.val().description
        })
      })
      state.reverse()
      setPosts(state)
    })
  }, [])

  return (
    <div>
      {posts.map(item => (
        <div className="post" key={item.key}>
          <header className="post__header">
            <strong className="post__title">{item.title}</strong>
            <em className="post__author">Author: {item.author}</em>
          </header>
          <img className="post__img" src={item.url} alt="Capa post" />
          <p className="post__description">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Home;