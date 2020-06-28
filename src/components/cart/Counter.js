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

  const [count, setCount] = useState(1);

  return (
    <div>
      <Button
        style={styles}
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
            props.onMinusItem;
            console.log(count);
          }
        }}
      >
        -
      </Button>
      <input style={styles} type="number" min={1} placeholder={count}></input>
      <Button
        style={styles}
        onClick={() => {
          setCount(count + 1);
          props.onPlusItem;
          console.log(count);
        }}
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
