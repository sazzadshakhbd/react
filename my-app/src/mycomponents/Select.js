import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Select extends Component {
  constructor() {
    super();
    this.state = {
      city1: "Dhaka",
      city2: "Barishal",
      city3: "Chittagonj",
      city4: "Sylhet",
      city5: "Rajshahi",
      show: "",
      auto: "Barishal",
    };
  }
  onchangeHandelar = (event) => {
    var mySelectValue = event.target.value;
    this.setState({ show: mySelectValue, auto: mySelectValue });
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-group">
              <select
                className="form-control m-5"
                onChange={this.onchangeHandelar}
                value={this.state.auto}
              >
                <option>{this.state.city1}</option>
                <option>{this.state.city2}</option>
                <option>{this.state.city3}</option>
                <option>{this.state.city4}</option>
                <option>{this.state.city5}</option>
              </select>
            </div>
            <div className="form-group">
              <p>{this.state.show}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Select;
