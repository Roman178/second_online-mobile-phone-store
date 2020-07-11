import React from "react";
import Counter from "./Counter";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

const CardForCart = (props) => {
  return (
    <div
      key={props.id}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "1.1rem",
        marginTop: "1%",
        backgroundColor: "white",
      }}
    >
      <img width="150px" src={props.path}></img>
      <div>{props.title}</div>
      <Counter
        onChangeQuantity={(count) => props.onChangeQuantity(count)}
        quantity={props.quantity}
      ></Counter>

      <div>{props.cost}</div>
      <Button
        id={props.id}
        onClick={props.onDeleteItem}
        style={{ marginRight: "5%" }}
      >
        <DeleteOutlined style={{ transform: "scale(1.3)" }} />
      </Button>
    </div>
  );
};

export default CardForCart;
