import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import CharacterList from './CharacterList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CharacterList />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
