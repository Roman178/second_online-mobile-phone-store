import React from "react";
import Counter from "./Counter";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

const CardForCart = (props) => {
  return (
    <div className="card-cart" key={props.id}>
      <img className="card-cart-img" width="150px" src={props.path}></img>
      <p className="card-cart-title">{`${props.title} ${props.memory} ${props.color}`}</p>
      <div className="card-cart-cont-counterprice">
        <Counter
          onChangeQuantity={(count) => props.onChangeQuantity(count)}
          quantity={props.quantity}
        ></Counter>

        <p className="card-cart-price">${props.cost}</p>
      </div>

      <Button
        className="card-cart-deletebtn"
        id={props.id}
        onClick={props.onDeleteItem}
      >
        <DeleteOutlined />
      </Button>
    </div>
  );
};

export default CardForCart;
