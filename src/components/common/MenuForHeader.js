import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

const MenuForHeader = (props) => {
  return (
    <Menu theme="dark" mode="horizontal" selectable={false}>
      <Menu.Item key="0/">
        <NavLink to="/"> HOME</NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink
          // activeStyle={{
          //   backgroundColor: "#1890ff",
          //   color: "#fff",
          //   transition: "background-color 0.6s ease-out",
          // }}
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
  );
};

export default MenuForHeader;
