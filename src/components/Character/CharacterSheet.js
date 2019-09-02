import React from 'react';

import CharacterListContext from '../../contexts/CharacterListContext';
import CharacterAPIService from '../../services/characters-api-service';

import './CharacterSheet.css';

class CharacterSheet extends React.Component {
  static contextType = CharacterListContext;

  async componentDidMount() {
    try {
      const characters = await CharacterAPIService.getAllCharacters();
      this.context.setCharactersList(characters);
    }
    catch (e) {
      this.context.setError(e);
    }
  }

  render() {
    const charId = this.props.match.params.charId;
    const character = this.context.characters[charId];
    return (
      <div className='characterSheet'>
        {character
          ? <section>
            <p id='charName'>{`Name: ${character.charName}`}</p>
            <p id='charName'>{`Race: ${character.charRace}`}</p>
            <p id='charName'>{`Class: ${character.charClass}`}</p>
            <p id='charName'>{`Description: ${character.charDesc}`}</p>
          </section>
          :<section>
            <p>Character not found.</p>
          </section>}
      </div>
    );
  }
}

export default CharacterSheet;