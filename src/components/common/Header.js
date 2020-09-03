import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Layout, Menu, Dropdown } from "antd";
import MenuForHeader from "../common/MenuForHeader";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { loadApple } from "../../redux/actions/appleActions";
import { loadCart, deleteItemFromCart } from "../../redux/actions/cartActions";
// import CardForCart from "../cart/CardForCart";
import PopUpCartWindow from "../cart/PopUpCartWindow";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";

const HeaderAntd = Layout.Header;

function Header(props) {
  const [quantity, setQuantity] = useState(0);
  const [visible, setVisible] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    props.loadApple();
    props.loadCart();
  }, []);

  useEffect(() => {
    if (props.cart.length > 0) {
      const totalItemsQuantity = props.cart.reduce(
        (sum, current) => sum + parseInt(current.quantity),
        0
      );
      setQuantity(totalItemsQuantity);
    }

    if (props.cart.length === 0) {
      setQuantity(0);
    }
  }, [props]);

  useEffect(() => {
    if (props.cart.length > 0) {
      setCart(props.cart);
    }
  }, [props]);

  function handleDeleteItem(item) {
    setCart(cart.filter((i) => i.id !== item.id));
    props.deleteItemFromCart(item);
  }

  return (
    <HeaderAntd
      style={{
        zIndex: 999,
        width: "100%",
        position: "fixed",
        fontFamily: "Helvetica",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <MenuForHeader />

      <Dropdown
        visible={visible}
        onVisibleChange={(flag) => setVisible(flag)}
        overlay={() =>
          quantity === 0 ? (
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
            <PopUpCartWindow cart={cart} onDeleteItem={handleDeleteItem} />
          )
        }
      >
        <NavLink to="/cart">
          <div>
            {quantity}
            <ShoppingCartOutlined
              style={{ fontSize: "170%", color: "rgba(255, 255, 255, 0.65)" }}
            />
          </div>
        </NavLink>
      </Dropdown>
    </HeaderAntd>
  );
}

const mapStateToProps = (state, ownProps) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  loadCart,
  loadApple,
  deleteItemFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
