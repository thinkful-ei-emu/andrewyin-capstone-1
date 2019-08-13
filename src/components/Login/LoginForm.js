import React from 'react';
import TokenService from '../../services/token-service';
import AuthAPIService from '../../services/auth-api-service';

class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  constructor(props) {
    super(props);
    
    this.state = {
      error: null
    };
  }

  handleSubmitJWTAuth = async (event) => {
    event.preventDefault();
    this.setState({ error: null });

    const { userName, password } = event.target;

    try {
      const res = await AuthAPIService.postLogin({
        userName: userName.value,
        password: password.value
      });

      userName.value = '';
      password.value = '';
      TokenService.saveAuthToken(res.authToken);
      this.props.onLoginSuccess();
    }
    catch (e) {
      console.error(e);
    }
  }

  render() {
    const { error } = this.state;
    return (
      <form
        className='loginForm'
        onSubmit={this.handleSubmitJWTAuth}
      >
        <section className='errorSection'>
          {error && <p className='red'>{error}</p>}
        </section>

        <label htmlFor='userName'>
          Username:
        </label>
        <input required type='text' id='userName' name='userName'>
        </input>

        <br />

        <label htmlFor='password'>
          Password:
        </label>
        <input required type='password' id='password' name='password'>
        </input>

        <br />

        <button type='submit'>Login</button>
        <input type='reset' value='Clear'></input>
      </form>
    );
  }
}

export default LoginForm;