import React from "react";
import PropTypes from "prop-types";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

const PopUpCartWindow = (props) => (
  <div className="pop-up-window">
    <ul className="pop-up-window-ul">
      <p className="pop-up-window-ul-title">Recent add item(s)</p>
      {props.cart.map((item) => (
        <li key={item.id} className="pop-up-window-li">
          <NavLink
            className="pop-up-window-li-link"
            to={"/" + item.brand + "/" + item.category + "/" + item.url}
          >
            <img className="pop-up-window-li-link-img" src={item.path}></img>
          </NavLink>
          <div>
            <p>
              {`${item.brand[0].toUpperCase() + item.brand.slice(1)} ${
                item.title
              } ${item.memory} ${item.color}`}
            </p>
            <p>
              {item.quantity} x ${item.price}
            </p>
          </div>
          <Button
            className="pop-up-window-li-delete-btn"
            onClick={() => props.onDeleteItem(item)}
          >
            <DeleteOutlined />
          </Button>
        </li>
      ))}
    </ul>

    <>
      <h5 className="pop-up-window-subtotal">
        Subtotal: $
        {props.cart.reduce((sum, current) => sum + parseInt(current.cost), 0)}
      </h5>
      <div className="pop-up-window-cont-viewcart-checkout">
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

PopUpCartWindow.propTypes = {
  cart: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export default PopUpCartWindow;
