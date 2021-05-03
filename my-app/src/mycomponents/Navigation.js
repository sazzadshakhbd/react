import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <NavLink exact activeStyle={{ color: "white" }} to="/">
              Home
            </NavLink>
            <NavLink exact activeStyle={{ color: "white" }} to="/about">
              About
            </NavLink>
            <NavLink exact activeStyle={{ color: "white" }} to="/contact">
              Contact
            </NavLink>
            <NavLink exact activeStyle={{ color: "white" }} to="/portfolio">
              Portfolio
            </NavLink>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
