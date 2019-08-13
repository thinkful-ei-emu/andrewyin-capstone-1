import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import TokenService from '../../services/token-service';

function Header() {
  return (
    <header>
      <h1>
        Dungeons and Dragons 5e Character Creator
      </h1>
      <Switch>
        <Route
          exact
          path='/characters/:charId'
          render={() => {
            return (
              <Link to={'/characters'}>
                <button>
                  {'Characters'}
                </button>
              </Link>
            );
          }}
        />
        <Route
          path='/characters'
          render={() => {
            return (
              <Link to='/characters/create'>
                <button>
                  Create a New Character
                </button>
              </Link>
            );
          }}
        />
      </Switch>

      <Switch>
        <Route
          path='/characters'
          render={() => {
            return (
              <Link to={'/'}>
                <button
                  id='logoutButton'
                  onClick={() => {
                    TokenService.clearAuthToken();
                  }}
                >
                  Logout
                </button>
              </Link>
            );
          }}
        />
      </Switch>
  
    </header>
  );
}
    
export default Header;