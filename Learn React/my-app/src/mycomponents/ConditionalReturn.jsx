import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class ConditionalReturn extends Component {
  constructor() {
    super()
    this.state = {
      login: true
    }
  }
  render() {
    if(this.state.login === true) {
      return(
        <button className="btn btn-primary btn-lg">Logout</button>
      )
    }else {
      return(
        <button className="btn btn-primary btn-lg">Login</button>
      )
    }
  }
}

export default ConditionalReturn