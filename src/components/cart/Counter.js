import React from "react";
import { Button } from "antd";

const Counter = () => {
  const styles = {
    width: "34px",
    height: "34px",
    border: "1px solid #e6e6e6",
    backgroundColor: "white",
  };
  return (
    <div>
      <Button style={styles}>-</Button>
      <input style={styles} type="number" min={1} placeholder={1}></input>
      <Button style={styles}>+</Button>
    </div>
  );
};

export default Counter;
