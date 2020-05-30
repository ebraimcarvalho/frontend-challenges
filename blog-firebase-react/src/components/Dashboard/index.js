import React, {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom'
import firebase from '../../firebase'
import './styles.css'

function Dashboard() {
  let history = useHistory();
  const email = localStorage.email

  useEffect(() => {
    let user = firebase.getCurrent()
    if(user) {
      console.log(user)
    } else {
      return history.push('/login')
    }
  }, [history])

  const logout = () => {
    firebase.logout()
      .then(result => {
        localStorage.removeItem('email')
        history.push('/login')
      })
      .catch(error => console.log('Error: ', error))
  }

  return (
    <div className="container__dashboard">
      <div className="dashboard__info">
        <h3>Dashboard</h3>
        <p>Hello, you are loggin with {email}</p>
        <Link to="/dashboard/new" className="link__new">
          <button className="btn__new-post">New Post</button>
        </Link>
      </div>
      <div className="div__logout">
        <button className="btn__logout" onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Dashboard;