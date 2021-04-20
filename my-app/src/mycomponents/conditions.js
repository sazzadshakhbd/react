import React, { Component } from "react";

class Condition extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
    };
  }
  render() {
    if (this.state.login === true) {
      return (
        <div>
          <button>Login</button>
        </div>
      );
    } else {
      return (
        <div>
          <button>Logout</button>
        </div>
      );
    }
  }
}

export default Condition;
