import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default function LandingPageRoute(props) {
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Redirect
            to={{
              pathname: '/characters',
              state: { from: componentProps.location }
            }}
          />
          : <Redirect
            to={{
              pathname: '/login',
              state: { from: componentProps.location }
            }}
          />
      )}
    />
  );
}
