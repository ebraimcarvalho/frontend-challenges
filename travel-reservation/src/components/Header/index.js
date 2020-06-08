import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/android-chrome-192x192.png';
import './styles.css'

function Header() {
  return(
    <header>
      <div className="header__container">
        <Link to="/">
          <img className="logo" src={logo} alt=""/>
        </Link>

        <Link className="reservations" to="/reservations">
          <div>
            <strong>Minhas Reservas</strong>
            <span>0 reservas</span>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header;