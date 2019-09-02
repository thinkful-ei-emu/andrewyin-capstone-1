import React from 'react';
import PropTypes from 'prop-types';

const CharacterCreateContext = React.createContext({
  characterInfo: {},
  currentActive: 'details',
});

class CharacterCreateProvider extends React.Component {
  static propTypes = {
    children: PropTypes.Component
  }


  render() {
    const value = {};
    return (
      <CharacterCreateContext.Provider
        value={value}
      >
        {this.props.children}
      </CharacterCreateContext.Provider>
    );
  }
}

export default CharacterCreateContext;