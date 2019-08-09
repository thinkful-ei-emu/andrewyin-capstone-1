import React from 'react';

const CharacterListContext = React.createContext({
  characters: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setCharactersList: () => { }
});

class CharacterListProvider extends React.Component {
  state = {
    characters: [],
    error: null,
  }

  setCharactersList = characters => {
    this.setState({ characters });
  }

  setError = error => {
    this.setState({ error });
  }

  clearError = () => {
    this.setState({ error: null });
  }

  render() {
    const value = {
      characters: this.state.characters,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCharactersList: this.setCharactersList
    };

    return <CharacterListContext.Provider value={value}>
      {this.props.children}
    </CharacterListContext.Provider>;
  }
}

export default CharacterListContext;

export { CharacterListProvider };