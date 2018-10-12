import React from "react";


class Form extends React.Component 
// {
//     constructor() {
//       super();
//     }
//     handleSubmit(event){
//     event.preventDefault();
//   }
//   render(){

//       return (
//         <div>
//           <h4>I'm a form</h4>
//           <form onSubmit={this.handleSubmit}>
//             <div className="inputField">
//               <input typpe="file" />
              
//             </div>
    
//             <div className="twoButtons">
    
//               {/* not sure about the onClick function */}
//               <button type="button">Close</button>
//               <button type="submit">submit</button>
//             </div>
//           </form>
//         </div>
//       );
//   }
// }
{
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();
    }
    handleSubmit(event) {
      event.preventDefault();
      alert(
        `Selected file - ${
          this.fileInput.current.files[0].name
        }`
      );
    }
  
    render() {
      return (
        <form className="uglyForm" onSubmit={this.handleSubmit}>
         <p>lots of options should go here...</p>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
  

export default Form;