import React, { Component } from "react";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      postData: "",
      postResult: "",
    };
  }

  onChangeHandeler = (event) => {
    let myData = event.target.value;
    this.setState({ postData: myData });
  };
  onClickHandelar = () => {
    axios
      .post("https://sazzadshakh.xyz/test.php", this.state.postData)
      .then((response) => {
        this.setState({ postResult: response.data });
      })
      .catch((error) => {
        alert("Somenthing Went Wrong");
      });
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-group">
              <p>{this.state.postResult}</p>
              <input
                onChange={this.onChangeHandeler}
                type="text"
                className="form-control"
              ></input>
              <button
                onClick={this.onClickHandelar}
                type="submit"
                className="btn btn-outline-success m-5"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
