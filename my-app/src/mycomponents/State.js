import React, { Component } from "react";

class State extends Component {
  constructor() {
    super();

    this.state = {
      name: "Sazzad",
      age: "37",
      location: "Rajbari",
      gender: "Male",
    };
  }
  render() {
    return (
      <div>
        <h1>My Name is {this.state.name}</h1>
        <h1>I am {this.state.age} years old</h1>
        <h1>My Location is {this.state.location}</h1>
        <h1>I am {this.state.gender}</h1>
      </div>
    );
  }
}

export default State;
