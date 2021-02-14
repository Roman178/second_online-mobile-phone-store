import React from "react";
import CardForCart from "./CardForCart";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

const PopUpCartWindow = (props) => (
  <div
    style={{
      border: "2px solid #f0f2f5",
      zIndex: 9999,
      backgroundColor: "white",
    }}
  >
    <ul
      style={{
        margin: "0",
        flex: "1 1 auto",
        overflowY: "auto",
        minHeight: "0px",
        padding: "0",
        maxHeight: "400px",
        border: "2px solid #f0f2f5",
        borderBottom: "none",
        width: "400px",
        backgroundColor: "white",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p style={{ borderBottom: "2px solid #f0f2f5" }}>Recent add item(s)</p>
      {props.cart.map((item) => (
        <li
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "2px solid #f0f2f5",
          }}
        >
          <NavLink to={"/" + item.brand + "/" + item.category + "/" + item.url}>
            <img width="150px" src={item.path}></img>
          </NavLink>
          <div>
            <p>{`${item.title} ${item.memory} ${item.color}`} </p>
            <p>
              {item.quantity} x ${item.price}
            </p>
          </div>
          <Button
            style={{ marginRight: "5%" }}
            onClick={() => props.onDeleteItem(item)}
          >
            <DeleteOutlined />
          </Button>
        </li>
      ))}
    </ul>

    <>
      <h5 style={{ borderTop: "3px solid #f0f2f5", margin: "0" }}>
        Subtotal: $
        {props.cart.reduce((sum, current) => sum + parseInt(current.cost), 0)}
      </h5>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "5%",
        }}
      >
        <NavLink to="/cart">
          <Button size="large" type="primary">
            View Cart
          </Button>
        </NavLink>
        <NavLink to="/checkout">
          <Button size="large" type="primary">
            Checkout
          </Button>
        </NavLink>
      </div>
    </>
  </div>
);

export default PopUpCartWindow;
