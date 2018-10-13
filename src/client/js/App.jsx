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
      showPopup: false,
      brand: '',
      price: 0,
      size: 0,
      title: '',
      condition: '',
      imgUrl: '',
      listing: [{
        imgUrl: '', id: 1, title: 'Test', price: 10, condition: 'NWT', brand: 'xx', size: 100,
      }],
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.createNew = this.createNew.bind(this);
    this.updateSelectedBrand = this.updateSelectedBrand.bind(this);
    this.updateSelectedCondition = this.updateSelectedCondition.bind(this);
    this.updateSelectedSize = this.updateSelectedSize.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  componentDidMount() {
    // fetch('/listing')
    //   .then(data => {
    //     return data.json();
    //   })
    //   .then(data => {
    //     this.setState({
    //       ...this.state,
    //       listing: data,
    //     });
    //   })
  }

  createNew() {
    const newList = this.state.listing.slice();
    newList.push({
      imgUrl: '',
      id: `id${newList.length}`,
      title: this.state.title,
      price: this.state.price,
      size: this.state.size,
      condition: this.state.condition,
      brand: this.state.brand,
    });
    this.setState({
      ...this.state,
      listing: newList,
    });

    // make the post request here?

    // fetch('/content', {
    //     method: 'POST',
    //     headers: {
    //       "Content-Type": "application/json; charset=utf-8",
    //     },

    //     body: JSON.stringify({
    //
    //
    //     })
    //   })
    //   .then(data => {
    //     console.log(data)
    //     return data.json();
    //   })
    //   .then(newItem => {
    //     listCopy.push(newItem);
    //     this.setState({
    //       ...this.state,
    //       listing: listCopy,
    //     })
    //   });

    this.togglePopup();
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  // all the updating little functions when you pick brand/size/write title
  updateSelectedBrand(event) {
    this.setState({
      brand: event.target.value,
    });
  }

  updateSelectedSize(event) {
    this.setState({
      size: event.target.value,
    });
  }

  updateSelectedCondition(event) {
    this.setState({
      condition: event.target.value,
    });
  }

  updatePrice(event) {
    this.setState({
      price: event.target.value,
    });
  }

  updateTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {/* <nav>
          <button>login</button>
          <button onClick={this.togglePopup}>post</button>
          <br />

          <select>
            <option defaultValue="kevin">----kevin----</option>
            <option>brand</option>
            <option>size</option>
            <option>condition</option>
          </select>

          <select>
            <option>get lots of stuff back from db, how</option>
          </select>

        </nav>

        {this.state.showPopup
          ? (
            <Form
              createNew={this.createNew}
              togglePopup={this.togglePopup}
              updateSelectedBrand={this.updateSelectedBrand}
              updateSelectedSize={this.updateSelectedSize}
              updateSelectedCondition={this.updateSelectedCondition}
              updateTitle={this.updateTitle}
              updatePrice={this.updatePrice}
            />
          ) : null
        }
        <List listing={this.state.listing} /> */}
        <Signup />
      </div>
    );
  }
}
export default App;
