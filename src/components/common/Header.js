// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";

import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";

const HeaderAntd = Layout.Header;

function Header() {
  return (
    <HeaderAntd style={{ zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="0">
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

export default Header;

{
  /* <Navbar bg="dark" variant="dark" className="row">
      <Nav className="mr-auto">
        <NavLink className="nav-link" to="/">
          HOME
        </NavLink>
        <NavLink className="nav-link" to="/apple">
          Apple
        </NavLink>
        <NavLink className="nav-link" to="/samsung">
          Samsung
        </NavLink>
        <NavLink className="nav-link" to="huawei">
          Huawei
        </NavLink>
        <NavLink className="nav-link" to="honor">
          Honor
        </NavLink>
        <NavLink className="nav-link" to="xiaomi">
          Xiaomi
        </NavLink>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar> */
}
