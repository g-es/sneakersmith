import React, { Component } from 'react';
import Form from './components/Form.jsx';
import List from './components/List.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

// import MoreInfo from "./components/MoreInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    // whatever stuff
    return (
      <div>
        {/* <p>hello</p>
          <Form />
          <List /> */}
        <Signup />
      </div>
    );
  }
}
export default App;
