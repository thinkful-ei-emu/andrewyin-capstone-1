import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CharacterCreatePage from './CharacterCreatePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CharacterCreatePage />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
