import React from 'react';

import CharacterContext from '../../contexts/CharacterContext';
import CharacterAPIService from '../../services/characters-api-service';

class CharacterSheet extends React.Component {
  static contextType = CharacterContext;

  async componentDidMount() {
    try {
      const charId = this.props.match.params.id;
      const character = await CharacterAPIService.getCharacterById(charId);
      this.context.setChar(character);
    }
    catch (e) {
      this.context.setError(e);
    }
  }

  render() {
    const character = this.context.character;
    return (
      <div className='CharacterSheet'>
        <p id='charName'>{`Name: ${character.charName}`}</p>
        <p id='charName'>{`Race: ${character.charRace}`}</p>
        <p id='charName'>{`Class: ${character.charClass}`}</p>
        <p id='charName'>{`Description: ${character.charDesc}`}</p>
      </div>
    );
  }
}

export default CharacterSheet;