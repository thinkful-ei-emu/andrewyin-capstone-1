import React from 'react';
import { Link } from 'react-router-dom';

import './CharacterThumbnail.css';

class CharacterThumbnail extends React.Component {
  static defaultProps = {
    charId: 0,
    charName: '',
    charRace: '',
    charClass: ''
  }
  
  render() {
    return (
      <li className="characterThumbnail">
        <Link to={`/characters/${this.props.charId}`}>
          <p>{this.props.charName}</p>
          <p>{this.props.charRace}</p>
          <p>{this.props.charClass}</p>
        </Link>
      </li>
    );
  }
}

export default CharacterThumbnail;
