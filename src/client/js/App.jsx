import React, { Component } from "react";
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";

// import MoreInfo from "./components/MoreInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
  render() {
    //whatever stuff
    return(
      <div>
        <p>hello</p>
        <Form />
        <List />
      </div>
    )
  }
}
export default App;