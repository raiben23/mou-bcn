import React, { Component } from "react";
import axios from 'axios';
import "./main-container.scss";

export default class MainContainer extends Component {
  constructor() {
    super();
    this.state = "";
  }
  render() {
    return <div className="main-container">
      {this.props.children}
    </div>;
  }


}
