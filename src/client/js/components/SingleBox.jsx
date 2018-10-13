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
    return (
      <div className='singleBox'>
        {/* uid, title, brand, condition, size, price, imgurl */}
        <img className='imgBox' src={this.props.content.imgurl}></img>
        {/* <h4>imgurl: {this.props.content.imgurl}</h4> */}
        {/* <h4>brand: {this.props.content.brand}</h4> */}
        <h4>{this.props.content.title}</h4>
        <h4>${this.props.content.price}</h4>
        {/* <h4>size: {this.props.content.size}</h4> */}
        {/* <h4>condition: {this.props.content.condition}</h4> */}
        <button className="detail-button" onClick={this.togglePopup}>Show more details</button>
        {this.state.showPopup ? 
          <Popup text='Close Me' togglePopup={this.togglePopup}
          allProps={this.props.content}
          /> : null
        }
        </div>
      );
    }
  };

class Popup extends React.Component {
    render() {
      console.log(this.props.allProps)
      return (
        <div className='popup'>
            <h1>test</h1>
            <img className='innerImgBox' src={this.props.allProps.imgurl}></img>
            <h4>imgurl: {this.props.allProps.imgurl}</h4>
        <h4>brand: {this.props.allProps.brand}</h4>
        <h4>title: {this.props.allProps.title}</h4>
        <h4>price: {this.props.allProps.price}</h4>
        <h4>size: {this.props.allProps.size}</h4>
        <h4>condition: {this.props.allProps.condition}</h4>
          <button onClick={this.props.togglePopup}>close me</button>
        </div>
      );
    }
  }

export default SingleBox;