import React, { Component } from "react";
import ReactRain from "react-rain-animation";
import "react-rain-animation/lib/style.css";

export class Rain extends Component {
  render() {
    return (
      <div id="hujan">
        <ReactRain numDrops="300" />
      </div>
    );
  }
}

export default Rain;
