import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './components/Form.jsx';
import List from './components/List.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Navigation from './components/Navigation.jsx';
import ListContainer from './container/ListContainer';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/paulsg10/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'savvseld';

// import MoreInfo from "./components/MoreInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: 'false',
    };

    this.updateLoggedInStatus = this.updateLoggedInStatus.bind(this);
  }

  updateLoggedInStatus() {
    const { isLoggedIn } = this.state;
    this.setState({ isLoggedIn: !isLoggedIn });
  }

  render() {
    const { isLoggedIn } = this.state;
    const updateLoggedInStatus = this;
    return (
      <BrowserRouter>
        <div>
          <Navigation isLoggedIn={isLoggedIn} />
          <Switch>
            <Route path="/login" render={() => <Login updateLoggedInStatus={updateLoggedInStatus} />} />
            <Route path="/signup" component={Signup} />
            <Route path="/" component={ListContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
