import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import SiderSubMenu from "./SiderSubMenu";

const { SubMenu } = Menu;

const AppleMenu = (props) => {
  // const checkPage = props.location.pathname.includes("/", 1);
  // const [currentPageIsASubPage, setTrueOrFalseSubPage] = useState("");

  // useEffect(() => {
  //   return setTrueOrFalseSubPage(checkPage);
  // }, [props.location]);

  const generationsOfiPhones = [...new Set(props.iphones.map((i) => i.title))];

  console.log(generationsOfiPhones);

  return (
    <Menu mode="vertical" style={{ height: "100%" }}>
      <SiderSubMenu
        key="iphone"
        title="iPhone"
        onTitleClick={() => props.history.push("/apple/iphones")}
        generationsOfDevice={generationsOfiPhones}
        devices={props.iphones}
      />

      {/* <SubMenu
        key="iphone"
        title="iPhone"
        onTitleClick={() => props.history.push("/apple/iphones")}
      >
        {generationsOfiPhones.map((gen) => {
          const iphonesOfCurrGen = props.iphones.filter((i) => i.title === gen);
          console.log(iphonesOfCurrGen);
          return (
            <SubMenu title={gen}>
              {iphonesOfCurrGen.map((item) => (
                <Menu.Item key={item.id}>
                  <NavLink
                    key={item.id}
                    to={
                      currentPageIsASubPage
                        ? props.location.pathname + "/" + item.url
                        : props.location.pathname +
                          "/" +
                          item.category +
                          "/" +
                          item.url
                    }
                  >
                    {item.title + " " + item.memory + " " + item.color}
                  </NavLink>
                </Menu.Item>
              ))}
            </SubMenu>
          );
        })}
      </SubMenu> */}
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
