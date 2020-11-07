import React from "react";
import Counter from "./Counter";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const MyContext = React.createContext(75); // Just try to check Context. Nevermind.

const CardForCart = (props) => {
  return (
    <MyContext.Provider value={{ f: 1, s: "dfsaf", t: [] }}>
      <div
        key={props.id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "1.1rem",
          marginBottom: "1%",
          backgroundColor: "white",
        }}
      >
        <img width="150px" src={props.path}></img>
        <div>{props.title}</div>
        <Counter
          onChangeQuantity={(count) => props.onChangeQuantity(count)}
          quantity={props.quantity}
        ></Counter>

        <div>${props.cost}</div>
        <Button
          id={props.id}
          onClick={props.onDeleteItem}
          style={{ marginRight: "5%" }}
        >
          <DeleteOutlined style={{ transform: "scale(1.3)" }} />
        </Button>
      </div>
    </MyContext.Provider>
  );
};

export default CardForCart;
