import React, { Component } from "react";

class Welcome extends Component {
  clickMe(x) {
    alert(x);
  }
  render() {
    return (
      <div>
        <button
          onClick={this.clickMe.bind(
            this,
            "This is the button which is used class component"
          )}
        >
          Click Me
        </button>
        <h1>Welcome {this.props.name}</h1>
      </div>
    );
  }
}

export default Welcome;
