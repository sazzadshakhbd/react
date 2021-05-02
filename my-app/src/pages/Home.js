import React, { Component } from "react";

class Home extends Component {
  render() {
    const aboutTitle = {
      backgroundColor: "Teal",
      margin: "10px",
      padding: "30px",
      color: "white",
    };
    return (
      <div>
        <h1 style={aboutTitle}>Home Page</h1>
      </div>
    );
  }
}

export default Home;
