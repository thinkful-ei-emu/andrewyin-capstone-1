import React from 'react';
import { Link } from 'react-router-dom';

import TokenService from '../../services/token-service';
import './HamburgerMenu.css';

function openSideNav() {
  document.getElementById('sideNav').style.width = '200px';
}

function closeSideNav() {
  document.getElementById('sideNav').style.width = '0';
}

function Hamburger(props) {
  return <>
    <span id='navOpen' className='nav-open'>
      <span className='hamburger' onClick={openSideNav}>
        <div className='hamburger-bar'></div>
        <div className='hamburger-bar'></div>
        <div className='hamburger-bar'></div>
      </span>
    </span>
    <nav id='sideNav' className='side-nav'>
      <span className='nav-close' onClick={closeSideNav}>
        <button id='closeBtn' className='closeBtn' >&times;</button>
      </span>
      <Link to={'/characters'}>
        <button id='characters' className='nav-link' onClick={() => closeSideNav()}>Characters</button>
      </Link>
      <Link to={'/characters/create'}>
        <button id='create' className='nav-link' onClick={() => closeSideNav()}>Create</button>
      </Link>
      <Link to={'/'}>
        <button id='logout' className='nav-link' onClick={() => TokenService.clearAuthToken()}>Logout</button>
      </Link>
    </nav>
  </>;
}

export default Hamburger; 