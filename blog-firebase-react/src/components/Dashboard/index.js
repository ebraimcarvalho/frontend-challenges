import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import firebase from '../../firebase'

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
    <div>
      <div>
        <h1>Dashboard</h1>
        <p>Hello {email}</p>
      </div>
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Dashboard;