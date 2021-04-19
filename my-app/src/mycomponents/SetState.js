import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class SetState extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sazzad",
    };
  }
  changeName(a) {
    this.setState({ name: a });
  }
  render() {
    return (
      <div>
        <button
          onClick={this.changeName.bind(this, "Sobuz")}
          className="btn btn-danger m-5"
        >
          Change Name
        </button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default SetState;
