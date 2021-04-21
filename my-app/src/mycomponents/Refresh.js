import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Refresh extends Component {
  constructor() {
    super();
    this.refreshNow = this.refreshNow.bind(this);
  }

  refreshNow() {
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <button
          onClick={this.refreshNow}
          className="btn-lg btn m-5 btn-outline-danger"
        >
          Refresh Button
        </button>
        <h1 className="text-success display-5">{Math.random()}</h1>
      </div>
    );
  }
}

export default Refresh;
