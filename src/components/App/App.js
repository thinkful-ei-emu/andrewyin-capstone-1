import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// import VoxMachina from '../../store';

// import Header from '../Header/Header';
import HamburgerMenu from '../Hamburger/HamburgerMenu';
import CharacterList from '../CharacterList/CharacterList';
import CharacterSheet from '../Character/CharacterSheet';
import CharacterCreateForm from '../CharacterCreateForm/CharacterCreateForm';
// import CharactersAPIService from '../../services/characters-api-service';
import LoginPage from '../Login/LoginPage';
import NotFoundPage from '../NotFound/NotFoundPage';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import LandingPageRoute from '../Utils/LandingPageRoute';

class App extends React.Component {

  render() {
    return <>
      <HamburgerMenu />

      <section className='app'>
        <Switch>
          <Route
            exact
            path={'/'}
            component={LandingPageRoute}
          />
          <PublicOnlyRoute
            exact
            path={'/login'}
            component={LoginPage}
          />
          <PrivateRoute
            exact
            path={'/characters'}
            component={CharacterList}
          />
          <PrivateRoute
            exact
            path={'/characters/create'}
            component={CharacterCreateForm}
          />
          <PrivateRoute
            path={'/characters/:charId'}
            component={CharacterSheet}
          />
          <Route
            component={NotFoundPage}
          />
        </Switch>
      </section>
    </>;
  }
}

export default App;