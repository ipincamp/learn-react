import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>Ini adalah Class Component</h2>
        <p>{this.props.info}</p>
      </div>
    );
  }
}

export default ClassComponent;
