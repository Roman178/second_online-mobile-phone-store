import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Layout, Menu, Dropdown } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import PopUpCartWindow from "../cart/PopUpCartWindow";
import { loadApple } from "../../redux/actions/appleActions";
import { loadCart } from "../../redux/actions/cartActions";

const HeaderAntd = Layout.Header;

function Header(props) {
  const [quantity, setQuantity] = useState(0);

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
      console.log(totalItemsQuantity);
      setQuantity(totalItemsQuantity);
    }

    if (props.cart.length === 0) {
      setQuantity(0);
    }
  }, [props]);

  console.log(quantity);

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
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="0/">
          <NavLink to="/"> HOME</NavLink>
        </Menu.Item>
        <Menu.Item key="1">
          <NavLink
            activeStyle={{
              backgroundColor: "#1890ff",
              color: "#fff",
              transition: "background-color 0.6s ease-out",
            }}
            to="/apple"
          >
            Apple
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/samsung">Samsung</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/huawei">Huawei</NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/honor">Honor</NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink to="/xiaomi">Xiaomi</NavLink>
        </Menu.Item>
      </Menu>
      <NavLink to="/cart">
        <Dropdown overlay={PopUpCartWindow}>
          <div>
            {quantity}
            <ShoppingCartOutlined
              style={{ fontSize: "170%", color: "rgba(255, 255, 255, 0.65)" }}
            />
          </div>
        </Dropdown>
      </NavLink>
    </HeaderAntd>
  );
}

const mapStateToProps = (state, ownProps) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  loadCart,
  loadApple,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
