import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class ReactDomRender extends Component {
  myFunction() {
    let element = <h1>I live id Dhaka</h1>;
    let container = document.getElementById("textChange");
    let callBack = function () {
      alert("Hi! I am Callback Function");
    };
    ReactDOM.render(element, container, callBack);
  }
  render() {
    return (
      <div>
        <button
          onClick={this.myFunction}
          className="btn btn-success btn-lg m-5"
        >
          Change
        </button>
        <h1 id="textChange">My Name is Sazzad</h1>
      </div>
    );
  }
}

export default ReactDomRender;
