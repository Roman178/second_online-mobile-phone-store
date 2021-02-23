import React from "react";
import { Menu } from "antd";
import PropTypes from "prop-types";
import MenuCreator from "./MenuCreator";
import { withRouter } from "react-router";

function SamsungMenu(props) {
  const samsungDevices = Object.keys(props.samsung);

  const generationsOfSamsungDevices = {
    galaxys: [...new Set(props.galaxys.map((i) => i.title))],
    galaxya: [...new Set(props.galaxya.map((i) => i.title))],
    galaxynote: [...new Set(props.galaxynote.map((i) => i.title))],
    galaxytab: [...new Set(props.galaxytab.map((i) => i.title))],

    // ipads: [...new Set(props.ipads.map((i) => i.title))],
    // macbooks: [...new Set(props.macbooks.map((i) => i.title))],
  };
  return (
    <MenuCreator
      currBrandUrl="/samsung/"
      brandDevices={samsungDevices}
      generationsOfDevices={generationsOfSamsungDevices}
      galaxys={props.galaxys}
      galaxya={props.galaxya}
      galaxynote={props.galaxynote}
      galaxytab={props.galaxytab}
    />

    // <Menu mode="vertical" style={{ height: "100%" }}>

    // <SubMenu
    //   key="galaxyS"
    //   title={<span>Galaxy S</span>}
    //   onTitleClick={(obj) => console.log(obj)}
    // >
    //   {props.galaxyS.map((item) => (
    //     <Menu.Item key={item.id}>{item.title}</Menu.Item>
    //   ))}
    // </SubMenu>
    // <SubMenu key="ipad" title={<span>iPad</span>}>
    //   {props.ipads.map((item) => (
    //     <Menu.Item key={item.id}>{item.title}</Menu.Item>
    //   ))}
    // </SubMenu>
    // <SubMenu key="macBook" title={<span>Mac Book</span>}>
    //   {props.macbooks.map((item) => (
    //     <Menu.Item key={item.id}>{item.title}</Menu.Item>
    //   ))}
    // </SubMenu>

    // </Menu>
  );
}

export default SamsungMenu;
