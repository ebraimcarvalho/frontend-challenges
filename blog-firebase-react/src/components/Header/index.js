import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
  return(
    <header className="header">
      <Link to="/">Blog Firebase-React</Link>
      <Link to="/login">Entrar</Link>
    </header>
  )
}

export default Header;