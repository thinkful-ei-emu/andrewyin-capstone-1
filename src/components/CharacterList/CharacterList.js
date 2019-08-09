/* eslint-disable react/prop-types */
import React from 'react';

import CharacterThumbnail from '../Character/CharacterThumbnail';
import CharacterAPISerivce from '../../services/characters-api-service';
import CharacterListContext from '../../contexts/CharacterListContext';

class CharacterList extends React.Component {

  static contextType = CharacterListContext;

  async componentDidMount() {
    try {
      const characters = await CharacterAPISerivce.getAllCharacters();
      this.context.setCharactersList(characters);
    }
    catch (e) {
      this.context.setError(e);
    }
  }

  render() {
    const characters = this.context.characters.map((character, index) => {
      console.log(character.charName);
      return (
        <CharacterThumbnail
          key={index}
          id={character.id}
          charName={character.charName}
          charRace={character.charRace}
          charClass={character.charClass}
          charDesc={character.charDesc}
        />
      );
    });
    return (
      <div className='CharacterList'>
        {characters}
      </div>
    );
  }
}

export default CharacterList;
