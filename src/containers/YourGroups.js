import React, { Component } from "react";
import { ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./YourGroups.css";


export default class YourGroups extends Component {

  render() {
    return (
      <div className="YourGroups">
      <h1>View Your Groups</h1>
      <LinkContainer
            key="new"
            to="/notes/new"
            >
      <ListGroupItem>
      <h2>
      <b>{"\uFF0B"}</b> Create a new group
      </h2>
      </ListGroupItem>
      </LinkContainer>

      </div>
    );
  }
}
