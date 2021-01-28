import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import MenuCreator from "./MenuCreator";

const { SubMenu } = Menu;

const AppleMenu = (props) => {
  const checkPage = props.location.pathname.includes("/", 1);
  const [currentPageIsASubPage, setTrueOrFalseSubPage] = useState("");

  useEffect(() => {
    return setTrueOrFalseSubPage(checkPage);
  }, [props.location]);

  // function getCorrectLink(item) {
  //   return currentPageIsASubPage
  //     ? props.location.pathname + "/" + item.url
  //     : props.location.pathname + "/" + item.category + "/" + item.url;
  // }

  const appleDevices = Object.keys(props.apple);

  const generationsOfAppleDevices = {
    iphones: [...new Set(props.iphones.map((i) => i.title))],
    ipads: [...new Set(props.ipads.map((i) => i.title))],
    macbooks: [...new Set(props.macbooks.map((i) => i.title))],
  };

  return (
    <MenuCreator
      currBrandUrl="/apple/"
      brandDevices={appleDevices}
      generationsOfDevices={generationsOfAppleDevices}
      iphones={props.iphones}
      ipads={props.ipads}
      macbooks={props.macbooks}
    />

    // <Menu mode="vertical" style={{ height: "100%" }}>
    //   {appleDevices.map((device) => {
    //     return (
    //       <SubMenu
    //         key={device}
    //         title={device}
    //         onTitleClick={() => props.history.push("/apple/" + device)}
    //       >
    //         {generationsOfAppleDevices[device].map((gen) => {
    //           const devicesOfCurrGen = props[device].filter(
    //             (i) => i.title === gen
    //           );
    //           return (
    //             <SubMenu title={gen}>
    //               {devicesOfCurrGen.map((item) => (
    //                 <Menu.Item key={item.id}>
    //                   <NavLink key={item.id} to={getCorrectLink(item)}>
    //                     {item.title + " " + item.memory + " " + item.color}
    //                   </NavLink>
    //                 </Menu.Item>
    //               ))}
    //             </SubMenu>
    //           );
    //         })}
    //       </SubMenu>
    //     );
    //   })}
    // </Menu>
  );
};

export default withRouter(AppleMenu);
