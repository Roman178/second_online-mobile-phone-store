import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const { SubMenu } = Menu;

const AppleMenu = (props) => {
  return (
    <Menu mode="vertical" style={{ height: "100%" }}>
      <SubMenu
        key="iphone"
        title={<div>iPhone</div>}
        onTitleClick={() => props.history.push("/apple/iphones")}
      >
        {props.iphones.map((item) => (
          <Menu.Item key={item.id}>{item.title}</Menu.Item>
        ))}

        {/* <Menu.Item key="1">option1</Menu.Item>
        <Menu.Item key="2">option2</Menu.Item>
        <Menu.Item key="3">option3</Menu.Item>
        <Menu.Item key="4">option4</Menu.Item> */}
      </SubMenu>
      <SubMenu
        key="ipad"
        title={<span>iPad</span>}
        onTitleClick={() => props.history.push("/apple/ipads")}
      >
        {props.ipads.map((item) => (
          <Menu.Item key={item.id}>{item.title}</Menu.Item>
        ))}
      </SubMenu>
      <SubMenu
        key="macBook"
        title={<span>Mac Book</span>}
        onTitleClick={() => props.history.push("/apple/macbooks")}
      >
        {props.macbooks.map((item) => (
          <Menu.Item key={item.id}>{item.title}</Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  );
};

export default withRouter(AppleMenu);
