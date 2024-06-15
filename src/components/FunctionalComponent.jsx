import React, { useState } from "react";

const FunctionalComponent = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Ini adalah Functional Component</h2>
      <p>{props.message}</p>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default FunctionalComponent;
