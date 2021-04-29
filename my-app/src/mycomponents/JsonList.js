import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class JsonList extends Component {
  SelectCity = (data) => {
    return <option>{data.city}</option>;
  };
  SelectZip = (x) => {
    return <option>{x.zip}</option>;
  };
  render() {
    const jsonListing = [
      {
        city: "Dhaka",
        zip: 5000,
      },
      {
        city: "Rajshahi",
        zip: 6000,
      },
      {
        city: "Khulna",
        zip: 4000,
      },
    ];
    const jasonDetails = jsonListing.map(this.SelectCity);
    const jasonDetailss = jsonListing.map(this.SelectZip);
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <select className="form-control m-5">{jasonDetails}</select>
            <select className="form-control m-5">{jasonDetailss}</select>
          </div>
        </div>
      </div>
    );
  }
}

export default JsonList;
