import React from 'react';

const nullChar = {
  charName: null,
  charRace: null,
  charClass: null,
  charDesc: null
};

const CharacterContext = React.createContext({
  character: nullChar,
  error: null,
  setError: () => { },
  clearError: () => { },
  setChar: () => { },
  clearChar: () => { }
});   

class CharacterProvider extends React.Component {
  state = {
    character: nullChar,
    error: null
  }

  setError = error => {
    // console.error(error.message);
    this.setState({ error });
  }

  clearError = () => {
    this.setState({ error: null });
  }

  setChar = character => {
    this.setState({ character });
  }

  clearChar = () => {
    this.setChar(nullChar);
  }

  render() {
    const value = {
      character: this.state.character,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setChar: this.setChar,
      clearChar: this.clearChar
    };

    return (
      <CharacterContext.Provider value={value}>
        {this.props.children}
      </CharacterContext.Provider>
    );
  }
}

export default CharacterContext;
export { CharacterProvider };