import { LinkContainer } from "react-router-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";


class App extends Component {
  constructor(props) {
  super(props);

  this.state = {
    isAuthenticated: false
  };
}

userHasAuthenticated = authenticated => {
  this.setState({ isAuthenticated: authenticated });
}

  render() {
    const childProps = {
  isAuthenticated: this.state.isAuthenticated,
  userHasAuthenticated: this.userHasAuthenticated
};

  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">ClusterTruck</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
          <LinkContainer to="/login">
            <NavItem>Log In</NavItem>
          </LinkContainer>
            <LinkContainer to="/signup">
              <NavItem>Sign Up</NavItem>
            </LinkContainer>
            <LinkContainer to="/orders/add">
              <NavItem>Add Order</NavItem>
            </LinkContainer>
            <LinkContainer to="/groups/your">
              <NavItem>Your Groups</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes childProps={childProps} />

    </div>
  );
}
}

export default App;
