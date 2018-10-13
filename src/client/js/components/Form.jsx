import React from "react";


class Form extends React.Component {
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
    // where should these functions go
    
    
    render() {
      return (
        <div className="formBackground">
        <form className="uglyForm" onSubmit={this.handleSubmit}>
         
           <div>
            
            <input type="text" placeholder="title" onChange={(event) => { this.props.updateTitle(event); }}></input><br></br>
            <input type="text" placeholder="price" onChange={(event) => { this.props.updatePrice(event); }}></input><br></br>
            <input type="text" placeholder="imgUrl" onChange={(event) => { this.props.updateUrl(event); }}></input><br></br>

            <select id="selectBrand" onChange={(event) => { this.props.updateSelectedBrand(event); }}>
              <option defaultValue="test"> -- Brand -- </option>
               <option>paul's brand 1</option>
               <option>paul's brand 2</option>
               <option>paul's brand 3</option>
               <option>paul's brand 4</option>
               <option>Converse</option>
               <option>Jordan</option>

            </select>
            <br></br>

            <select id="selectSize" onChange={(event) => { this.props.updateSelectedSize(event); }}>
              <option defaultValue="test"> -- Size -- </option>
               <option>6</option>
               <option>7</option>
               <option>8</option>
               <option>9</option>
               <option>10</option>
               <option>11</option>
               <option>12</option>
            </select>
            <br></br>

            <select id="selectCondition" onChange={(event) => { this.props.updateSelectedCondition(event); }}>
              <option defaultValue="test"> -- Conditions -- </option>
               <option>NWT</option>
                <option>NWOT</option>
               <option>Pre-Owned</option>
            </select>
            <br></br>

          
           </div>
         
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <button type="submit" onClick={this.props.createNew}>Submit</button>
          <br></br>
          <button onClick={this.props.togglePopup}>close me</button>
        </form>
        </div>
      );
    }
  }
  

export default Form;