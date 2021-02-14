import React from "react";
import Counter from "./Counter";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

const CardForCart = (props) => {
  return (
    <div className="card-cart" key={props.item.id}>
      <NavLink
        className="card-cart-linkcont-img"
        to={
          "/" +
          props.item.brand +
          "/" +
          props.item.category +
          "/" +
          props.item.url
        }
      >
        <img className="card-cart-img" src={props.item.path}></img>
      </NavLink>

      <p className="card-cart-title">{`${props.item.title} ${props.item.memory} ${props.item.color}`}</p>
      <div className="card-cart-cont-counterprice">
        <Counter
          onChangeQuantity={(count) => props.onChangeQuantity(count)}
          quantity={props.item.quantity}
        ></Counter>

        <p className="card-cart-price">${props.item.cost}</p>
      </div>

      <Button
        className="card-cart-deletebtn"
        id={props.item.id}
        onClick={props.onDeleteItem}
      >
        <DeleteOutlined />
      </Button>
    </div>
  );
};

export default CardForCart;
