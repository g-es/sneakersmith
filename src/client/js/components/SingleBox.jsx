import React from "react";

// class SingleBox extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//           showPopup: false
//         };
//     }
//     togglePopup() {
//         this.setState({
//           showPopup: !this.state.showPopup
//         });
//     }
//     render(){
       
//         return(
//             <div className='singleBox'>
//                 <h4>imaginary image goes here</h4>
//                 <p>stuff below should appear when I click the ugly button, but for now</p>
//                 <h4>price </h4>
//                 <h4>brand</h4>
//                 <h4>size</h4>
//                 <h4>contact</h4>
//                 <button>ugly button</button>
//             </div>
//         )
//     }
// }
class SingleBox extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className='singleBox'>
        <h1>image should go here</h1>
        <button onClick={this.togglePopup.bind(this)}>show popup</button>
        {this.state.showPopup ? 
          <Popup text='Close Me' closePopup={this.togglePopup.bind(this)}/> : null
        }
        </div>
      );
    }
  };

class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>test</h1>
          <button onClick={this.props.closePopup}>close me</button>
          </div>
        </div>
      );
    }
  }

export default SingleBox;