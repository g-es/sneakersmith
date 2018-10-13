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
          

            <select id="selectBrand" onChange={(event) => { this.props.updateSelectedBrand(event); }}>
              <option defaultValue="test"> -- Brand -- </option>
               <option>Nike</option>
               <option>adidas</option>
               <option>Jordan</option>
               <option>Converse</option>

            </select>
            <br></br>

            <select id="selectSize" onChange={(event) => { this.props.updateSelectedSize(event); }}>
              <option defaultValue="test"> -- Size -- </option>
              <option>7</option>
              <option>7.5</option>
              <option>8</option>
              <option>8.5</option>
              <option>9</option>
              <option>9.5</option>
              <option>10</option>
              <option>10.5</option>
              <option>11</option>
              <option>11.5</option>
              <option>12</option>
            </select>
            <br></br>

            <select id="selectCondition" onChange={(event) => { this.props.updateSelectedCondition(event); }}>
              <option defaultValue="test"> -- Conditions -- </option>
              <option>Mint Deadstock</option>
              <option>Deadstock</option>
              <option>Near Deadstock</option>
              <option>Excellent</option>
              <option>Good</option>
            </select>
            <br></br>

          </div>
          <button type="submit" onClick={this.props.createNew} >Submit</button>
          <button onClick={this.props.togglePopup}>close me</button>
        </form>

          <div>
            <form  /*onSubmit={(event) => {
              event.preventDefault();
              console.log('event reached');
              console.log(event.target);
              this.props.handleUploadImage(event)}}*/>
              <input type='file' name="image" onChange={this.props.handleUploadImage}/><br/>
              <input type="submit" value="Upload" />
              {/* <button onClick={} >Upload</button> */}
            </form>
          </div>

      </div>
    );
  }
}


export default Form;