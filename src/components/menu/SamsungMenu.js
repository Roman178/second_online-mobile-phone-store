import React from "react";
import { Menu } from "antd";
import PropTypes from "prop-types";
import MenuCreator from "./MenuCreator";

const { SubMenu } = Menu;

function SamsungMenu(props) {
  return (
    <Menu mode="vertical" style={{ height: "100%" }}>
      <SubMenu
        key="galaxyS"
        title={<span>Galaxy S</span>}
        onTitleClick={(obj) => console.log(obj)}
      >
        {props.galaxyS.map((item) => (
          <Menu.Item key={item.id}>{item.title}</Menu.Item>
        ))}
      </SubMenu>
      {/* <SubMenu key="ipad" title={<span>iPad</span>}>
        {props.ipads.map((item) => (
          <Menu.Item key={item.id}>{item.title}</Menu.Item>
        ))}
      </SubMenu>
      <SubMenu key="macBook" title={<span>Mac Book</span>}>
        {props.macbooks.map((item) => (
          <Menu.Item key={item.id}>{item.title}</Menu.Item>
        ))}
      </SubMenu> */}
    </Menu>
  );
}

export default SamsungMenu;
