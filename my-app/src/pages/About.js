import React, { Component } from "react";

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
      </div>
    );
  }
}

export default About;
