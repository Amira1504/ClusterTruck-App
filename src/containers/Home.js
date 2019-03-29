import React, { Component } from "react";
import "./Home.css";
import HomeLogo from "../large-logo.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>ClusterTruck</h1>
          <p>A simple delivery sharing app</p>
          <img src={HomeLogo} alt="Delivery Truck"/>
        </div>
      </div>
    );
  }
}
