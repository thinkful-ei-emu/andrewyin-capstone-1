import React from 'react';

class CharacterCreateDetails extends React.Component {
  render() {
    return <>
      <label htmlFor='charName'>Name: </label>
      <input type='text' id='charName' name='charName'></input>
      <br />
      <label htmlFor='charRace'>Race: </label>
      <input type='text' id='charRace' name='charRace'></input>
      <br />
      <label htmlFor='charClass'>Class: </label>
      <input type='text' id='charClass' name='charClass'></input>
      <br />
      <label htmlFor='charDesc'>Description: </label>
      <textarea id='charDesc' name='charDesc'></textarea>
      <br />
    </>;
  }
}

export default CharacterCreateDetails;