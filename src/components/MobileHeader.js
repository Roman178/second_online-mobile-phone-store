import React, { useState } from "react";
import { MenuUnfoldOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { NavLink } from "react-router-dom";
import MobileMenu from "./menu/MobileMenu";
import logo from "../img/logo.png";
import Search from "./Search";

function MobileHeader(props) {
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  return (
    <div className="mobile-header">
      <button
        onClick={() => setVisibleDrawer(true)}
        className="nav-button-mobile"
      >
        <MenuUnfoldOutlined className="nav-button-icon" />
      </button>
      <Drawer
        width={270}
        title={
          <NavLink onClick={() => setVisibleDrawer(false)} to="/">
            <img className="logo-img" src={logo} />
          </NavLink>
        }
        placement="left"
        closable={true}
        onClose={() => setVisibleDrawer(false)}
        visible={visibleDrawer}
        key="left"
      >
        <MobileMenu onClose={() => setVisibleDrawer(false)} />
      </Drawer>
      <Search options={props.options} />
      <NavLink to="/cart" className="mobile-cart-btn">
        <div>
          {props.quantity}
          <ShoppingCartOutlined
            style={{ fontSize: "170%", color: "rgba(255, 255, 255, 0.65)" }}
          />
        </div>
      </NavLink>
    </div>
  );
}

export default MobileHeader;
