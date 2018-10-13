import React, { Component } from 'react';
import { throws } from 'assert';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.validateUser = this.validateUser.bind(this);
  }

  updateUsername(event) {
    this.setState({ username: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  validateUser() {
    const { username, password } = this.state;
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(() => alert('Login successful.'))
      .catch(err => console.log('Login failed.'));
  }

  redirectToSignup() {

  }

  render() {
    const {
      updateUsername, updatePassword, validateUser, redirectToSignup,
    } = this;
    return (
      <div className="loginContainer">
        <h1>Login</h1>
        <p className="loginText">Username: </p>
        <input id="username" className="loginInput" type="text" onChange={updateUsername} />
        <p className="loginText">Password: </p>
        <input id="password" className="loginInput" type="password" onChange={updatePassword} />
        <br />
        <br />
        <button className="loginButton" onClick={validateUser}>Login</button>
        <button className="loginButton" onClick={redirectToSignup}>Sign up</button>
      </div>
    );
  }
}

export default Login;
