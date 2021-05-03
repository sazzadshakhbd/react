import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class About extends Component {
  render() {
    const aboutTitle = {
      backgroundColor: "rgb(12 215 75)",
      margin: "10px",
      padding: "30px",
      color: "white",
    };
    return (
      <div>
        <h1 style={aboutTitle}>About Page</h1>
        <button className="btn btn-dark">
          <Link className="text-white" to="/portfolio/Md Sazzad Ali Shakh">
            Go Portfolio Page
          </Link>
        </button>
      </div>
    );
  }
}

export default About;
