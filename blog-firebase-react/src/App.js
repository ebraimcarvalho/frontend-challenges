import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import firebase from './firebase'
import './index.css'

import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import New from './components/New'

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  
  useEffect(() => {
    firebase.app.ref('posts').once('value', (snapshot)=> {
      let state = [1, 2]

      snapshot.forEach((childItem)=>{
        state.push({
          key: childItem.key,
          titulo: childItem.val().title,
          image: childItem.val().url,
          descricao: childItem.val().description,
          autor: childItem.val().author,
        })
      });
      setFirebaseInitialized(state.length);
    })
  }, [])

  return firebaseInitialized ? (
    <BrowserRouter>
      <Header />
      <p>{firebaseInitialized}</p>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/dashboard/new" component={New}/>
      </Switch>
    </BrowserRouter> ) : (
    <p>Carregando...</p>
  )
}

export default App;
