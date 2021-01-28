import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const { SubMenu } = Menu;

function MenuCreator(props) {
  const checkPage = props.location.pathname.includes("/", 1);
  const [currentPageIsASubPage, setTrueOrFalseSubPage] = useState("");

  useEffect(() => {
    return setTrueOrFalseSubPage(checkPage);
  }, [props.location]);

  // Pass the correct link to NavLink's "to" depends on current url (e.g. "/apple" or "/apple/ipads")
  function getCorrectLink(item) {
    if (!currentPageIsASubPage) {
      return props.location.pathname + "/" + item.category + "/" + item.url;
    }
    if (
      currentPageIsASubPage &&
      props.location.pathname.includes(item.category)
    ) {
      return props.location.pathname + "/" + item.url;
    } else {
      const currCategory = props.brandDevices.find((dev) =>
        props.location.pathname.includes(dev)
      );
      const correctCategory = props.location.pathname.replace(
        currCategory,
        item.category
      );
      return correctCategory + "/" + item.url;
    }
  }

  function getCorrectSubmenuTitle(device) {
    switch (device) {
      case "iphones":
        return "iPhone";
      case "ipads":
        return "iPad";
      case "macbooks":
        return "Macbook";
      default:
        return;
    }
  }

  return (
    <Menu mode="vertical" style={{ height: "100%" }}>
      {props.brandDevices.map((device) => {
        return (
          <SubMenu
            key={device}
            title={getCorrectSubmenuTitle(device)}
            onTitleClick={() => props.history.push(props.currBrandUrl + device)}
          >
            {props.generationsOfDevices[device].map((gen) => {
              const devicesOfCurrGen = props[device].filter(
                (i) => i.title === gen
              );
              return (
                <SubMenu title={gen}>
                  {devicesOfCurrGen.map((item) => (
                    <Menu.Item key={item.id}>
                      <NavLink
                        key={item.id}
                        to={(location) => ({
                          ...location,
                          pathname: getCorrectLink(item),
                        })}
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
      })}
    </Menu>
  );
}

export default withRouter(MenuCreator);
