import React from "react";

class SingleBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  render() {
    // console.log(this.props.content,'sth missing in content')
    return (
      <div className='singleBox'>
        <h1>image should go here</h1>
        <h4>brand: {this.props.content.brand}</h4>
        <h4>title: {this.props.content.title}</h4>
        <h4>price: {this.props.content.price}</h4>
        <h4>size: {this.props.content.size}</h4>
        <h4>condition: {this.props.content.condition}</h4>
        <button onClick={this.togglePopup}>show popup</button>
        {this.state.showPopup ? 
          <Popup text='Close Me' togglePopup={this.togglePopup}/> : null
        }
        </div>
      );
    }
  };

class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
            <h1>test</h1>
          <button onClick={this.props.togglePopup}>close me</button>
        </div>
      );
    }
  }

export default SingleBox;