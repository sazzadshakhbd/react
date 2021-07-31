import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {

  constructor() {
    super()
    this.state = {
      username: ' '
    }
  }
 
  changeText = (event) => {
    var x = event.target.name;
    var y = event.target.value;
    this.setState({[x]: y})
  }

  onSubmitHandler = () => {
    alert(this.state.username)
  }
  render(){
    return(
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 bg-primary">
            <form onSubmit={this.onSubmitHandler}>
              <h1 className="py-3 text-center text-white">My First Form</h1>
              <h2 className="text-center text-white">{this.state.username}</h2>
              <div className="form-group">
                <input name="username" type="text" onChange={this.changeText} className="form-control" placeholder="Your name"></input>
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