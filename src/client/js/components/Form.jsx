import React from 'react';


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
      }`,
    );
  }

  render() {
    return (
      <div className="formBackground">
        <div id="formContainer">
          <form className="uglyForm" onSubmit={this.handleSubmit}>

            <div>

              <input className="formInput" id="formTitle" type="text" placeholder="Title" onChange={(event) => { this.props.updateTitle(event); }} />
              <br />
              <input className="formInput" id="formPrice" type="text" placeholder="Price" onChange={(event) => { this.props.updatePrice(event); }} />
              <br />


              <select className="formInput" id="selectBrand" onChange={(event) => { this.props.updateSelectedBrand(event); }}>
                <option defaultValue="test"> -- Brand -- </option>
                <option>Nike</option>
                <option>adidas</option>
                <option>Jordan</option>
                <option>Converse</option>
              </select>
              <br />

              <select className="formInput" id="selectSize" onChange={(event) => { this.props.updateSelectedSize(event); }}>
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
              <br />

              <select className="formInput" id="selectCondition" onChange={(event) => { this.props.updateSelectedCondition(event); }}>
                <option defaultValue="test"> -- Conditions -- </option>
                <option>Mint Deadstock</option>
                <option>Deadstock</option>
                <option>Near Deadstock</option>
                <option>Excellent</option>
                <option>Good</option>
              </select>
              <br />

            </div>
            <input className="formInput" id="imageInput" type="file" name="image" onChange={this.props.handleUploadImage} />
            <br />
            <button className="formInput" id="submitInput" type="submit" onClick={this.props.createNew}>Submit</button>
            <button className="formInput" id="closeInput" onClick={this.props.togglePopup}>Close</button>
          </form>

          <div>
            <form>
              {/* <input type='file' name="image" onChange={this.props.handleUploadImage}/><br/>
              <input type="submit" value="Upload" /> */}
              {/* <button onClick={} >Upload</button> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Form;
