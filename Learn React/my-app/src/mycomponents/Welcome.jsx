import React, {Component} from 'react'

class Welcome extends Component {
  render() {
    return(
      <h1>Welcome our country in {this.props.countryName}</h1>
    )
  }
}
export default Welcome;