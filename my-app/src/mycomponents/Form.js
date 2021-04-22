import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }
  onChangeHandelar = (event) => {
    let username = event.target.name;
    let uservalue = event.target.value;
    this.setState({ [username]: uservalue });
  };
  onSubmitHandelar = () => {
    alert(this.state.username);
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <h1 className="mt-5 text-secondary">My First React Form</h1>
            <form onSubmit={this.onSubmitHandelar} className="form">
              <h2 className="text-secondary">{this.state.username}</h2>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  onChange={this.onChangeHandelar}
                  className="form-control mt-5"
                  placeholder="Type here"
                ></input>
                <button type="submit" className="btn btn-success mt-3">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
