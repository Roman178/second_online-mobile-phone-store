import React, { useState } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "antd";
import { NavLink } from "react-router-dom";
import PopUpCartWindow from "./PopUpCartWindow";
import { ShoppingCartOutlined } from "@ant-design/icons";

function CartBlockForHeader(props) {
  const [visible, setVisible] = useState(false);

  return (
    <Dropdown
      visible={visible}
      onVisibleChange={(flag) => setVisible(flag)}
      overlay={() =>
        props.quantity === 0 ? (
          <h5
            style={{
              border: "1px solid gray",
              width: "400px",
              height: "100px",
              zIndex: 9999,
              backgroundColor: "white",
            }}
          >
            No products in the Cart
          </h5>
        ) : (
          <PopUpCartWindow
            cart={props.cart}
            onDeleteItem={props.onDeleteItem}
          />
        )
      }
    >
      <NavLink to="/cart">
        <div>
          {props.quantity}
          <ShoppingCartOutlined
            style={{ fontSize: "170%", color: "rgba(255, 255, 255, 0.65)" }}
          />
        </div>
      </NavLink>
    </Dropdown>
  );
}

CartBlockForHeader.propTypes = {
  quantity: PropTypes.number.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
};

export default CartBlockForHeader;
