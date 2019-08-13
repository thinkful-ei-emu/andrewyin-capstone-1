import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { }
    }
  }

  onLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  }

  render() {
    return (
      <section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.onLoginSuccess}
        />
      </section>
    );
  }
}

export default LoginPage;