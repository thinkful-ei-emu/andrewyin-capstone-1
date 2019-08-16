import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import LoginPage from './LoginPage';
import LoginForm from './LoginForm';

it('renders login page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders login form without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});
