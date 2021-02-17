import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import "./InputTypeNumberDeleteArrows.css";

const Counter = (props) => {
  const [count, setCount] = useState(props.quantity);

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
    <div className="card-cart-counter">
      <Button
        className="card-cart-counter-btn"
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
        className="card-cart-counter-btn"
        type="number"
        min={1}
        max={10}
        placeholder={1}
        value={count}
        onChange={handleChange}
      ></input>
      <Button
        className="card-cart-counter-btn"
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

Counter.propTypes = {
  onChangeQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Counter;
