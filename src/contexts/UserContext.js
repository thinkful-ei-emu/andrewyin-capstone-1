import React from 'react';
import AuthAPIService from '../services/auth-api-service';
import TokenService from '../services/token-service';

const UserContext = React.createContext({
  loggedIn: false,
  error: null,
  updateLoginState: () => { },
  login: () => { },
  logout: () => { },
});

class UserProvider extends React.Component {
  state = {
    loggedIn: false,
    error: null
  }

  updateLoginState = () => {
    this.setState({
      loggedIn: TokenService.hasAuthToken()
    });
  }

  login = async (cred) => {
    try {
      const res = await AuthAPIService.postLogin(cred);
      TokenService.saveAuthToken(res.authToken);
      this.updateLoginState();
    }
    catch (e) {
      this.setState({ error: e });
    }
  }

  logout = () => {
    TokenService.clearAuthToken();
    this.updateLoginState();
  }

  render() {
    const value = {
      loggedIn: this.state.loggedIn,
      // error: this.state.error,
      updateLoginState: this.updateLoginState,
      login: this.login,
      logout: this.logout
    };

    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContext;
export { UserProvider };