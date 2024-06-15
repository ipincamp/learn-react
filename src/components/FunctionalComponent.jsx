import React from "react";

const FunctionalComponent = (props) => {
  return (
    <div>
      <h2>Ini adalah Functional Component</h2>
      <p>{props.message}</p>
    </div>
  );
};

export default FunctionalComponent;
