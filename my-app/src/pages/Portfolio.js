import React, { Component } from "react";
import styles from "../main.module.css";

class Portfolio extends Component {
  constructor({ match }) {
    super();
    this.state = {
      myData: match.params.username,
    };
  }
  render() {
    return (
      <div>
        <h1 className={styles.portfolioTitle}>Portfolio Page</h1>
        <h2>{this.state.myData}</h2>
      </div>
    );
  }
}

export default Portfolio;
