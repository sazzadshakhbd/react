import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Text extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
  }
  onchangeHandelar = (event) => {
    var myText = event.target.value;
    this.setState({ userInput: myText });
  };
  render() {
    return (
      <div className="form-group">
        <textarea
          className="from-control m-5"
          rows="5"
          cols="60"
          placeholder="Please Inser some text"
          onChange={this.onchangeHandelar}
        ></textarea>
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default Text;
