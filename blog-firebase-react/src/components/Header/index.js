import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

function Header() {
  return(
    <header className="header">
      <div className="header__link">
        <Link to="/">Blog Firebase-React</Link>
        <Link to="/login">Entrar</Link>
      </div>
    </header>
  )
}

export default Header;