import React from 'react';

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
    const { imgurl, title, price } = this.props.content;
    return (
      <div className="singleBox">
        {/* uid, title, brand, condition, size, price, imgurl */}
        <img className="imgBox" src={imgurl} />
        <h4>{title}</h4>
        <h4>
          {price}
        </h4>
        <button type="button" className="detail-button" onClick={this.togglePopup}>Show more details</button>
        {this.state.showPopup
          ? (
            <Popup
              text="Close Me"
              togglePopup={this.togglePopup}
              allProps={this.props.content}
            />
          ) : null
        }
      </div>
    );
  }
}

const Popup = (props) => {
  return (
    <div className="popup">
      <h1>test</h1>
      <img className="innerImgBox" src={props.allProps.imgurl} />
      <h4>imgurl:{' '}{props.allProps.imgurl}</h4>
      <h4>brand:{' '}{props.allProps.brand}</h4>
      <h4>title:{' '}{props.allProps.title}</h4>
      <h4>price:{' '}{props.allProps.price}</h4>
      <h4>size:{' '}{props.allProps.size}</h4>
      <h4>condition:{' '}{props.allProps.condition}</h4>
      <button onClick={props.togglePopup}>{props.text}</button>
    </div>
  );
}

export default SingleBox;
