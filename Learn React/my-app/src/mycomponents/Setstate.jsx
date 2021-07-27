import React, {Component} from 'react';

class Setstate extends Component {
  constructor() {
    super()
    this.state={
      name: 'Md. Sazzad Ali Shakh'
    }
  }
  changeName(a) {
    this.setState({name: a})
  }
  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName.bind(this, 'Adib Bin Sazzad')}>Click me</button>
      </div>
    )
  }
}

export default Setstate;