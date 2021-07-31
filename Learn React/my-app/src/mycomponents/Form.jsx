import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {
  constructor(){
    super()
    this.state = {
      name: ' '
    }
  }
  changeText = (event) => {
    var x = event.target.value;
    this.setState({name: x})
  }
  render(){
    return(
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 bg-primary">
            <form>
              <h1 className="py-3 text-center text-white">My First Form</h1>
              <h2 className="text-center text-white">{this.state.name}</h2>
              <div className="form-group">
                <input onChange={this.changeText}  type="text" className="form-control" placeholder="Your name"></input>
              </div>
              <div className="form-group text-center">
                <input type="submit" className="btn btn-large btn-outline-light" value="Submit Now"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Form