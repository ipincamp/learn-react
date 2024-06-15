import React, { useState } from "react";

const FunctionalComponent = (props) => {
  const numValue = parseInt(props.numValue);
  const [count, setCount] = useState(numValue);

  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(Number(event.target.value));
  };

  const increment = () => {
    setCount(count + inputValue);
  };

  const decrement = () => {
    setCount(count - inputValue);
  };

  const containerStyle = {
    backgroundColor: count >= 10 ? "lightgreen" : "white",
    padding: "20px",
    borderRadius: "5px",
  };

  return (
    <div style={containerStyle}>
      <h2>Ini adalah Functional Component</h2>
      <p>{props.message}</p>

      <p>Count: {count}</p>
      <button onClick={increment}>Tambah [+]</button>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Masukkan angka"
      />
      <button onClick={decrement}>Kurang [-]</button>
    </div>
  );
};

export default FunctionalComponent;
