import React, { Component } from "react";

class Welcome extends Component {
  clickMe() {
    alert("This is the button which is used class component");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickMe}>Click Me</button>
        <h1>Welcome {this.props.name}</h1>
      </div>
    );
  }
}

export default Welcome;
