import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {

  constructor() {
    super()
    this.state= {
      firstName: ' ',
      lastName: ' ',
      email: ' ',
      mobileNumber: ' '
    }
  }
 
  onchangeHandelar = (event) => {
    var x = event.target.name;
    var y = event.target.value;
    this.setState({[x]:y})

    if(x === 'firstName'){
      var namePattern = /^[a-zA-Z\s]+$/;
      if(!namePattern.test(y)){
        this.setState({firstName: 'First name is not valid'})
      }
    }
    if(x === 'lastName'){
      var namePattern2 = /^[a-zA-Z\s]+$/;
      if(!namePattern2.test(y)){
        this.setState({lastName: 'Last name is not valid'})
      }
    }
    if(x === 'email') {
      var emailPattern = /^\S+@\S+\.\S+$/;
      if(!emailPattern.test(y)){
        this.setState({email: 'Email is not valid'})
      }
    }
    if(x === 'mobileNumber') {
      var mobileNumbers = /^[1-9]\d{9}$/;
      if(!mobileNumbers.test(y)) {
        this.setState({mobileNumbers: 'Mobile Number is not valid'})
      }
    }
  }
  

  
  render(){
    return(
      <div className="container">
        <div className="mt-5 row justify-content-center">
          <div className="col-md-6 bg-primary">
            <form>
              <h1 className="py-3 text-center text-white">Signup Form</h1>
              
              <div className="form-group">
                <input onChange={this.onchangeHandelar} name="firstName" type="text" className="form-control" placeholder="First name"></input>
              </div>
              <div className="form-group">
                <input onChange={this.onchangeHandelar} name="lastName" type="text" className="form-control" placeholder="Last name"></input>
              </div>
              <div className="form-group">
                <input onChange={this.onchangeHandelar} name="email" type="email" className="form-control" placeholder="Email"></input>
              </div>
              <div className="form-group">
                <input onChange={this.onchangeHandelar} name="mobileNumber" type="number" className="form-control" placeholder="Mobile Number"></input>
              </div>
              <div className="text-center form-group">
                <input type="submit" className="btn btn-large btn-outline-light" value="Submit Now"></input>
              </div>
            </form>
          </div>
          <div className="col-md-6 bg-primary">
            <h1 className="py-3 text-center text-white">Form Text</h1>
            <h3 className="mb-3 text-white">First Name: {this.state.firstName}</h3>
            <h3 className="mb-3 text-white">Last Name: {this.state.lastName}</h3>
            <h3 className="mb-3 text-white">Email Address: {this.state.email}</h3>
            <h3 className="mb-3 text-white">Mobile Number: {this.state.mobileNumber}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Form