
import '../css/navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../images/LogoT.png';
import profil from '../images/Profile.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
         <a href=''> <img src={logo} alt="Juna" /></a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#entrees" className="nav-link">
            Entrée
          </a>
        </li>
        <li className="nav-item">
          <a href="#plats" className="nav-link">
            Plat
          </a>
        </li>
        <li className="nav-item">
          <a href="#desserts" className="nav-link">
            Dessert
          </a>
        </li>
      </ul>
      {/* Champ de recherche */}
      <div className='right_nav'>
      <div className="search-bar">
        <input type="text" placeholder="Rechercher des recettes" />
        <button type="submit">R</button>
      </div>
      <div className="login-icon">
      <a href=''> <img src={profil} alt="Profil" /></a>
      </div>
        
      </div>
 
    </nav>
  );
}

export default Navbar;
