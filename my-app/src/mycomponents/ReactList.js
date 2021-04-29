import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class ReactList extends Component {
  dataItems = (data) => {
    return <option>{data * 10}</option>;
  };
  render() {
    const country = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const countryList = country.map(this.dataItems);
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <select className="form-control m-5">{countryList}</select>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactList;
