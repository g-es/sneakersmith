import React, { Component } from 'react';
import Form from './components/Form.jsx';
import List from './components/List.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import axios from 'axios';

let CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/paulsg10/image/upload';
let CLOUDINARY_UPLOAD_PRESET = 'savvseld';

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
    // this.updateUrl = this.updateUrl.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.handleBrand = this.handleBrand.bind(this);

  }

  componentDidMount() {
  
    fetch('/listing')
      .then(data => {
        console.log(data)
        return data.json();
      })
      .catch((err) => {
        console.log(err,'errrr');
      })
      .then(data => {
        console.log(data,'listing')
        this.setState({
          ...this.state,
          listing: data,
        });
      })
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
    console.log(newList,'list',this.state.listing);
    this.setState({
      ...this.state,
      listing: newList,
    });

    // make the post request here?

    fetch('/listing', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },

        body: JSON.stringify({
          brand: this.state.brand,
          condition: this.state.condition,
          imgurl: this.state.imgUrl,
          key: "uuid_generate_v4()",
          lid: this.state.listing.length,
          listdate: new Date(),
          price: this.state.price,
          size: this.state.size,
          title: this.state.title,
          uid: 2,
    
        })
      })
      .then(data => {
        console.log(data,'get back anything?')
        return data.json();
      })
      // .then(newItem => {
      //   newList.push(newItem);
      //   this.setState({
      //     ...this.state,
      //     listing: newList,
      //   })
      // });

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
        title:event.target.value,
      })
  } 
  // updateUrl(event) {
  //   this.setState({
  //     imgUrl:event.target.value
  //   })
  // }

  handleUploadImage(event) {
    event.preventDefault();

    let file = event.target.files[0];
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    })
    .then((res) => {
      console.log('did it work?', res.data.url);
      this.setState({
        imgUrl: res.data.url,
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
handleBrand(event) {
  if(event.target.value === 'brand'){
    console.log('brand!!!!')
    fetch('/filterbybrand/:brand')
    .then(data => {
      console.log(data)
      return data.json();
    })
    .catch((err) => {
      console.log(err,'errrr');
    })
    .then(data => {
      console.log(data,'in brand')  
    })
  }
  // else if(event.target.value === 'size'){
  //   console.log('size!!!!');
  //   fetch('/filterbybrand/:size')
  //   .then(data => {
  //     console.log(data)
  //     return data.json();
  //   })
  //   .catch((err) => {
  //     console.log(err,'errrr');
  //   })
  //   .then(data => {
  //     console.log(data,'in size')  
  //   })
  // }
  else if(event.target.value === 'condition'){
    console.log('condition!!!!');
    fetch('filterbycondition/:condition')
    .then(data => {
      console.log(data)
      return data.json();
    })
    .catch((err) => {
      console.log(err,'errrr');
    })
    .then(data => {
      console.log(data,'in condition')  
    })
  }
}
  render() {
    return (
      <div>
        <nav>
          <button>login</button>
          <button onClick={this.togglePopup}>post</button>
          <br />

          <select  onChange={(event)=>{
              return this.handleBrand(event)}
              }>
            <option defaultValue="kevin">----kevin----</option>
            <option>brand</option>
            {/* <option>size</option> */}
            <option>condition</option>
          </select>

          <select>
            <option>array of options</option>
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
              updateUrl={this.updateUrl}
              handleUploadImage={this.handleUploadImage}
            />
          ) : null
        }
        <List listing={this.state.listing} />
        {/* <Form  /> */}
      </div>
    );
  }
}
export default App;
