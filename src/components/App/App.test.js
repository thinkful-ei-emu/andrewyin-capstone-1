import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CharacterListProvider } from '../../contexts/CharacterListContext';
import { CharacterProvider } from '../../contexts/CharacterContext';
import { UserProvider } from '../../contexts/UserContext';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
