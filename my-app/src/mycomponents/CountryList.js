import React, { Component } from "react";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class CountryList extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        this.setState({ myData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const myList = this.state.myData;
    const countryList = myList.map((x) => {
      return <option>{x.name}</option>;
    });

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="form-group">
              <select className="form-control">{countryList}</select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryList;
