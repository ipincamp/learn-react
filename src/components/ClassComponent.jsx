import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>Ini adalah Class Component</h2>
        <p>
          Class Component lebih powerful dari pada Functional Component.
          Dapat memiliki metode dan siklus hidupnya sendiri.
        </p>
      </div>
    );
  }
}

export default ClassComponent;
