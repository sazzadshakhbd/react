import React, {Component} from 'react'

class Welcome extends Component {
  myFunc(z) {
    alert(z)
  }
  render() {
    return(
      <div>
        <button onClick={this.myFunc.bind(this, 'I am class component')}>Click me Class</button>
      </div>
    )
  }
}
export default Welcome;