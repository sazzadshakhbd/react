import React, { Component } from "react";

class VarElements extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
    };
  }
  render() {
    return this.state.login ? <h1>I am First</h1> : <h1>I am Second</h1>;
  }
}

export default VarElements;
