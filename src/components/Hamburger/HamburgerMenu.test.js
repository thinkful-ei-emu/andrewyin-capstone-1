import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <HamburgerMenu />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
