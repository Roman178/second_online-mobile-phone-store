import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Layout, Menu, Dropdown, Drawer } from "antd";
import MenuForHeader from "../common/MenuForHeader";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { loadApple, loadSamsung } from "../../redux/actions/appleActions";
import { deleteItemFromCart } from "../../redux/actions/cartActions";
// import CardForCart from "../cart/CardForCart";
import PopUpCartWindow from "../cart/PopUpCartWindow";
import { DeleteOutlined } from "@ant-design/icons";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import MobileMenu from "../menu/MobileMenu";

import { Button } from "antd";
import styles from "../../styles";

const HeaderAntd = Layout.Header;

function Header(props) {
  const [quantity, setQuantity] = useState(0);
  const [visible, setVisible] = useState(false);
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    props.loadApple();
    // props.loadCart();
    props.loadSamsung();
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
    <>
      <HeaderAntd className="main-header">
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
      <div className="mobile-header">
        <button
          onClick={() => setVisibleDrawer(true)}
          className="nav-button-mobile"
        >
          <MenuUnfoldOutlined className="nav-button-icon" />
        </button>
        <Drawer
          width={270}
          title="Basic Drawer"
          placement="left"
          closable={true}
          onClose={() => setVisibleDrawer(false)}
          visible={visibleDrawer}
          key="left"
        >
          <MobileMenu onClose={() => setVisibleDrawer(false)} />
        </Drawer>
      </div>
    </>
  );
}

const mapStateToProps = (state, ownProps) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  // loadCart,
  loadApple,
  loadSamsung,
  deleteItemFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
