import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { Layout, Menu, Dropdown } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import PopUpCartWindow from "../PopUpCartWindow";

const HeaderAntd = Layout.Header;

const comp = (
  <div style={{ backgroundColor: "red" }}>
    <h1>Hi brother</h1>
  </div>
);

function Header(props) {
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
      <NavLink to="/">
        <Dropdown overlay={PopUpCartWindow}>
          <ShoppingCartOutlined
            style={{ fontSize: "170%", color: "rgba(255, 255, 255, 0.65)" }}
          />
        </Dropdown>
      </NavLink>
    </HeaderAntd>
  );
}

export default withRouter(Header);
