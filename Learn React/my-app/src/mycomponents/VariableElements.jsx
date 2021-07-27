import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class VariableElements extends Component {
  constructor() {
    super() 
    this.state = {
      login: true
    }
  }
  render() {
    return(
      this.state.login ? 
      (
        <button className="btn btn-primary btn-lg">Logout</button>
      )
      :
      (
        <button className="btn btn-primary btn-lg">Login</button>
      )
    )
  }
}

export default VariableElements;