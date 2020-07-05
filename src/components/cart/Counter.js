import React, { useState } from "react";
import { Button } from "antd";
import "/home/roman/Documents/development/second_the-worst-online-mobile-phone-store/src/components/cart/InputTypeNumberDeleteArrows.css";

const Counter = (props) => {
  const styles = {
    width: "34px",
    height: "34px",
    border: "1px solid #e6e6e6",
    backgroundColor: "white",
  };

  const [count, setCount] = useState(props.quantity);

  function handleChange(e) {
    const value = parseInt(e.target.value);
    if (isNaN(value)) {
      setCount(1);
    } else {
      setCount(value);
    }
    props.onChangeQuantity(value);
  }

  return (
    <div>
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
        placeholder={1}
        value={count}
        onChange={handleChange}
      ></input>
      <Button
        style={styles}
        onClick={() => {
          setCount(count + 1);
          props.onChangeQuantity(count + 1);
        }}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
