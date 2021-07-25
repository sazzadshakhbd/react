import React, {Component} from 'react'

class Welcome extends Component {
  myFunc() {
    alert('Click me from Class Component')
  }
  render() {
    return(
      <div>
        <button onClick={this.myFunc}>Click me from Class Component</button>
      </div>
    )
  }
}
export default Welcome;