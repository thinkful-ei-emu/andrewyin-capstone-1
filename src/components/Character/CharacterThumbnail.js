import React from 'react';
import { Link } from 'react-router-dom';

import './Character.css';

class CharacterThumbnail extends React.Component {
  render() {
    return (
      <Link to={`/characters/${this.props.id}`}>
        <div className="character">
          <p>{this.props.charName}</p>
          <p>{this.props.charRace}</p>
          <p>{this.props.charClass}</p>
        </div>
      </Link>
    );
  }
}

export default CharacterThumbnail;
