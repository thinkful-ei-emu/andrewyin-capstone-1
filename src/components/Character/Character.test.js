import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import CharacterSheet from './CharacterSheet';
import CharacterThumbnail from './CharacterThumbnail';
import { CharacterProvider } from '../../contexts/CharacterContext';

it('renders CharacterSheet without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>

    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders CharacterThumbnail without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CharacterProvider>
        <CharacterSheet />
      </CharacterProvider>
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});