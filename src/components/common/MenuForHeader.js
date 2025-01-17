import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
// import logo from "../../img/logo.png";
import { logo } from "../HomePage";

const MenuForHeader = (props) => {
  return (
    <Menu theme="dark" mode="horizontal" selectable={false}>
      <Menu.Item key="0/">
        <NavLink to="/">
          <img className="logo-img" src={logo} />
        </NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to="/apple">Apple</NavLink>
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
  );
};

export default MenuForHeader;
