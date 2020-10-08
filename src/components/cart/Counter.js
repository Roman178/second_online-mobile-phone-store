import React, { useState, useContext } from "react";
import { Button } from "antd";
import "./InputTypeNumberDeleteArrows.css";
import { MyContext } from "../cart/CardForCart";

const Counter = (props) => {
  const styles = {
    width: "34px",
    height: "34px",
    border: "1px solid #e6e6e6",
    backgroundColor: "white",
  };

  const [count, setCount] = useState(props.quantity);
  const contexValue = useContext(MyContext);
  console.log(contexValue);

  function handleChange(e) {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value === 0) {
      setCount(1);
      props.onChangeQuantity(1);
    } else if (value > 10) {
      setCount(10);
      props.onChangeQuantity(10);
    } else {
      setCount(value);
      props.onChangeQuantity(value);
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <Button
        style={styles}
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
            props.onChangeQuantity(count - 1);
          }
        }}
      >
        -
      </Button>
      <input
        style={styles}
        type="number"
        min={1}
        max={10}
        placeholder={1}
        value={count}
        onChange={handleChange}
      ></input>
      <Button
        style={styles}
        onClick={() => {
          if (count < 10) {
            setCount(count + 1);
            props.onChangeQuantity(count + 1);
          }
        }}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
