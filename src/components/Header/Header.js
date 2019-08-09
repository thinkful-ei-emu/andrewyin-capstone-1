import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Header() {
  return (
    <Switch>
      <Route
        exact
        path='/create'
        render={({ history }) => {
          const goBack = 'Go Back';
          return (
            <header>
              <button id='goBack' onClick={() => history.goBack()}>
                {goBack}
              </button>
            </header>
          );
        }}
      />
      <Route
        exact
        path='/characters/:id'
        render={({ history }) => {
          const goBack = 'Go Back';
          return (
            <header>
              <button onClick={() => history.goBack()}>
                {goBack}
              </button>
            </header>
          );
        }}
      />      
      <Route
        path='/'
        render={() => {
          return (
            <header>
              <Link to='/create'>
                <button>
                  Create a New Character
                </button>
              </Link>
            </header>
          );
        }}
      />
    </Switch>
  );
}

export default Header;