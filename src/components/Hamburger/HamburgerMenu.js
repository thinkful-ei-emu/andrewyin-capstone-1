import React from 'react';
import { Link } from 'react-router-dom';

// import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './HamburgerMenu.css';



class Hamburger extends React.Component {

  static contextType = UserContext;
  
  openSideNav() {
    document.getElementById('sideNav').style.width = '200px';
  }
  
  closeSideNav() {
    document.getElementById('sideNav').style.width = '0';
  }

  componentDidMount() {
    this.context.updateLoginState();
  }

  render() {
    return <>
      <div id='navOpen' className='nav-open'>
        {this.context.loggedIn &&
          <span className='hamburger' onClick={this.openSideNav}>
            <div className='hamburger-bar'></div>
            <div className='hamburger-bar'></div>
            <div className='hamburger-bar'></div>
          </span>}
        <h3 className='navbar-header'>5e Stuff</h3>
      </div>

      <nav id='sideNav' className='side-nav'>
        <span className='nav-close' onClick={this.closeSideNav}>
          <button id='closeBtn' className='closeBtn' >&times;</button>
        </span>
        <Link to={'/characters'}>
          <button id='characters' className='nav-link' onClick={() => this.closeSideNav()}>Characters</button>
        </Link>
        <Link to={'/characters/create'}>
          <button id='create' className='nav-link' onClick={() => this.closeSideNav()}>Create</button>
        </Link>
        <Link to={'/'}>
          <button id='logout' className='nav-link' onClick={() => {
            this.closeSideNav();
            this.context.logout();
          }}>Logout</button>
        </Link>
      </nav>
    </>;
  }
}

export default Hamburger; 