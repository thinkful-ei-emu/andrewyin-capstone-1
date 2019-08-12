import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// import VoxMachina from '../../store';

import Header from '../Header/Header';
import CharacterList from '../CharacterList/CharacterList';
import CharacterSheet from '../Character/CharacterSheet';
import CharacterCreateForm from '../CharacterCreateForm/CharacterCreateForm';
import CharactersAPIService from '../../services/characters-api-service';

class App extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     characters: [...VoxMachina]
  //   };
  // }

  addCharacter = (newCharacter) => {
    // console.log(newCharacter);
    CharactersAPIService.addCharacter(newCharacter);
    // this .setState({
    //   characters: [...this.state.characters, newCharacter]
    // });
  }

  render() {
    return <>
      <Header />
      
      <Switch>
        <Route
          exact
          path={'/characters'}
          component={CharacterList}       
        />
        <Route
          path={'/characters/:id'}
          render={({ match, history }) => {
            return <CharacterSheet
              match={match}
              history={history}
              // characters={this.state.characters}
            />;
          }}
        />
        <Route
          exact
          path={'/create'}
          render={({ history }) => {
            return <CharacterCreateForm
              history={history}
              addCharacter={this.addCharacter}
            />;
          }}
        />
      </Switch>
    </>;
  }
}

export default App;
