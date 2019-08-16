import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import CharacterSheet from './CharacterSheet';
import CharacterThumbnail from './CharacterThumbnail';
import { CharacterListProvider } from '../../contexts/CharacterListContext';

it('renders CharacterSheet without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CharacterThumbnail />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders CharacterThumbnail without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CharacterListProvider>
        <CharacterSheet
          match={{
            params: {
              charId: 0
            }
          }}
        />
      </CharacterListProvider>
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});