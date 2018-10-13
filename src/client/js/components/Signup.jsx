import React, { Component } from 'react';
import { throws } from 'assert';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
    };

    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  updateUsername(event) {
    this.setState({ username: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  updateEmail(event) {
    this.setState({ email: event.target.value });
  }

  createUser() {
    const { username, password, email } = this.state;
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ username, password, email }),
    })
      .then(() => alert('Signup successful.'))
      .catch((err) => {
        alert('Login failed.');
        console.log('Login failed.');
      });
  }

  render() {
    const {
      updateUsername, updatePassword, updateEmail, createUser,
    } = this;
    return (
      <div className="loginContainer">
        <h1>Sign Up</h1>
        <p className="loginText">Username: </p>
        <input id="username" className="loginInput" type="text" onChange={updateUsername} />
        <p className="loginText">Password: </p>
        <input id="password" className="loginInput" type="password" onChange={updatePassword} />
        <p className="loginText">Email: </p>
        <input id="email" className="loginInput" onChange={updateEmail} />
        <br />
        <br />
        <button className="loginButton" onClick={createUser}>Sign up</button>
      </div>
    );
  }
}

export default Signup;
