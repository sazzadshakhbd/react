import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  onChangeHandelar = (event) => {
    let newName = event.target.value;
    this.setState({ name: newName });
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <h1 className="mt-5 text-secondary">My First React Form</h1>
            <div className="form">
              <h2 className="text-secondary">{this.state.name}</h2>
              <div className="form-group">
                <input
                  type="text"
                  onChange={this.onChangeHandelar}
                  className="form-control mt-5"
                  placeholder="Type here"
                ></input>
                <button type="submit" className="btn btn-success mt-3">
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
