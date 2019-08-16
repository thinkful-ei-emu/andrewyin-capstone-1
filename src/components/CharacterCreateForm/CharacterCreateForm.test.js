import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import CharacterCreateForm from './CharacterCreateForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CharacterCreateForm />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
