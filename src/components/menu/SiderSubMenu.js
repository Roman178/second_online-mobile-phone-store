import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const { SubMenu } = Menu;

function SiderSubMenu(props) {
  const checkPage = props.location.pathname.includes("/", 1);
  const [currentPageIsASubPage, setTrueOrFalseSubPage] = useState("");

  useEffect(() => {
    return setTrueOrFalseSubPage(checkPage);
  }, [props.location]);

  return (
    <SubMenu
      key={props.key}
      title={props.title}
      onTitleClick={props.onTitleClick}
    >
      {props.generationsOfDevice.map((gen) => {
        const devicesOfCurrGen = props.devices.filter((i) => i.title === gen);
        return (
          <SubMenu title={gen}>
            {devicesOfCurrGen.map((item) => (
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
    </SubMenu>
  );
}

export default withRouter(SiderSubMenu);
