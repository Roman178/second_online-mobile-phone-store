import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { Layout, Menu } from "antd";

const HeaderAntd = Layout.Header;

function Header(props) {
  return (
    <HeaderAntd
      style={{
        zIndex: 9999,
        width: "100%",
        position: "fixed",
        fontFamily: "Helvetica",
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="0/">
          <NavLink to="/"> HOME</NavLink>
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
    </HeaderAntd>
  );
}

export default withRouter(Header);
