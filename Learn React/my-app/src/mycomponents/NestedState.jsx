import React, {Component} from 'react';

class NestedReact extends Component {
  constructor(){
    super()
    var x = {
      name: 'Cow',
      color: ['White', 'Black', 'Orange'],
      body: {
        legs: 4,
        eyes: 2,
        ears: 2,
        weight: {
          small: 30,
          medium: 40,
          large: {
            weightLoss: [30, 35, 37]
          }
        }
      }

    }
    this.state = x;
  }
  render() {
    return(
      <div>
        <ul>
          <li>{this.state.name}</li>
          <li>{this.state.color[0]}</li>
          <li>{this.state.body.weight.large.weightLoss[1]}</li>
          <li>{this.state.body.ears}</li>
          <li>{this.state.body.legs}</li>
        </ul>
      </div>
    )
  }
}
export default NestedReact