import React from "react";

const Counter = () => {
  const styles = {
    width: "34px",
    height: "34px",
    border: "1px solid #e6e6e6",
    backgroundColor: "white",
  };
  return (
    <div>
      <button style={styles}>-</button>
      <input style={styles} type="number" min={1} placeholder={1}></input>
      <button style={styles}>+</button>
    </div>
  );
};

export default Counter;
