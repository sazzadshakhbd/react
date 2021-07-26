import React, {Component} from 'react';

class State extends Component {
  constructor() {
    super()
    this.state = {
      name: "Md. Sazzad Ali Shakh",
      age: 37,
      city: 'Rajbari',
      status: 'Married'
    }
  }
  render() {
    return(
      <div>
        <h1>My name is {this.state.name}. I am {this.state.age} year old. I live in {this.state.city}. I am {this.state.status}.</h1>
      </div>
    )
  }
}

export default State;