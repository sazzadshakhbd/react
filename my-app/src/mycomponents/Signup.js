import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
      mnumber: "",
    };
  }
  onChangeHandelar = (event) => {
    let inputText = event.target.name;
    let inputValue = event.target.value;
    this.setState({ [inputText]: inputValue });

    if (inputText === "fname") {
      var inputNamePattern = /^([a-zA-Z ]){2,30}$/;
      if (!inputNamePattern.test(inputValue)) {
        this.setState({ fname: "First Name is Not Valid" });
      }
    }
    if (inputText === "lname") {
      var inputNamePattern = /^([a-zA-Z ]){2,30}$/;
      if (!inputNamePattern.test(inputValue)) {
        this.setState({ lname: "First Name is Not Valid" });
      }
    }
    if (inputText === "email") {
      var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!emailPattern.test(inputValue)) {
        this.setState({ email: "email is not valid" });
      }
    }
    if (inputText === "mnumber") {
      var numberPattern = /^[0-9]+$/;
      if (!numberPattern.test(inputValue)) {
        this.setState({ mnumber: "Number is Not Valid" });
      }
    }
  };
  render() {
    return (
      <form>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="my-5 text-secondary">Sign Up Form</h1>

              <div className="form-group">
                <input
                  type="text"
                  name="fname"
                  onChange={this.onChangeHandelar}
                  className="form-control mb-3"
                  placeholder="First Name"
                ></input>
                <input
                  type="text"
                  name="lname"
                  onChange={this.onChangeHandelar}
                  className="form-control mb-3"
                  placeholder="Last name"
                ></input>
                <input
                  type="text"
                  name="email"
                  onChange={this.onChangeHandelar}
                  className="form-control mb-3"
                  placeholder="Email Address"
                ></input>
                <input
                  type="text"
                  name="mnumber"
                  onChange={this.onChangeHandelar}
                  className="form-control mb-3"
                  placeholder="Mobile Number"
                ></input>
                <button type="submit" className="btn btn-success mt-3">
                  Submit Now
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <h1 className="my-5 text-secondary">Show Result</h1>
              <div className="card text-white bg-dark ">
                <div className="card-body">
                  <p className="card-title text-left">
                    First Name: <strong>{this.state.fname}</strong>
                  </p>
                  <p className="card-title text-left">
                    Last Name: <strong>{this.state.lname}</strong>
                  </p>
                  <p className="card-title text-left">
                    Email Address: <strong>{this.state.email}</strong>
                  </p>
                  <p className="card-title text-left">
                    Mobile Number: <strong>{this.state.mnumber}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Signup;
