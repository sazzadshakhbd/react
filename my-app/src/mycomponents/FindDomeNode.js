import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";

class FindDomeNode extends Component {
  changeImage() {
    let x = document.getElementById("imgChange");
    ReactDOM.findDOMNode(x).src =
      "https://cdn.pixabay.com/photo/2020/06/20/11/08/cat-5320568_960_720.jpg";
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-lg m-5"
          onClick={this.changeImage}
        >
          Click Me
        </button>
        <br></br>
        <img
          id="imgChange"
          src="https://cdn.pixabay.com/photo/2021/04/11/08/57/donkey-6169088_960_720.jpg"
          alt=""
        ></img>
      </div>
    );
  }
}

export default FindDomeNode;
