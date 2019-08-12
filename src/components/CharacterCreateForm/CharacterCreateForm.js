/* eslint-disable react/prop-types */
import React from 'react';

class CharacterCreateForm extends React.Component {

  resetFields = () => {
    document.getElementById('charName').value = '';
    document.getElementById('charRace').value = '';
    document.getElementById('charClass').value = '';
    document.getElementById('charDesc').value = '';
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const charName = e.target.charName.value;
    const charRace = e.target.charRace.value;
    const charClass = e.target.charClass.value;
    const charDesc = e.target.charDesc.value;

    this.props.addCharacter({
      charName,
      charRace,
      charClass,
      charDesc
    });

    this.resetFields();
  }

  cancelButtonClick = (e) => {
    this.resetFields();
  } 

  render() {
    return (
      <form className='CharacterCreateForm'
        onSubmit={this.handleFormSubmit}
      >
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
        <button type='submit'>Submit</button>
        <button type='button' onClick={this.cancelButtonClick}>Cancel</button>
      </form>
    );
  }
}

export default CharacterCreateForm;