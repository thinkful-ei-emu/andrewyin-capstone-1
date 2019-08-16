import React from 'react';
import UserContext from '../../contexts/UserContext';

class LoginForm extends React.Component {

  static contextType = UserContext;

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

    await this.context.login({ 
      userName: userName.value,
      password: password.value
    });

    userName.value = '';
    password.value = '';

    this.props.onLoginSuccess();
  }

  render() {
    const error = this.context.error;
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
        <section className='buttonSection'>
          <button className='loginButton' type='submit'>Login</button>
          <input className='loginButton' type='reset' value='Clear'></input>
        </section>
      </form>
    );
  }
}

export default LoginForm;