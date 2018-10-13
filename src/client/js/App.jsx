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
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Navigation /> */}
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/" component={ListContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
