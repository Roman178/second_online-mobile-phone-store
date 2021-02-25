import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
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
                <SubMenu key={gen} title={gen}>
                  {devicesOfCurrGen.map((item) => (
                    <Menu.Item key={item.id}>
                      <NavLink
                        key={item.id}
                        to={`/${item.brand}/${item.category}/${item.url}`}
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

export function getCorrectSubmenuTitle(device) {
  switch (device) {
    case "iphones":
      return "iPhone";
    case "ipads":
      return "iPad";
    case "macbooks":
      return "Macbook";
    case "galaxys":
      return "Galaxy S";
    case "galaxya":
      return "Galaxy A";
    case "galaxynote":
      return "Galaxy Note";
    case "galaxytab":
      return "Galxy Tab";
    case "poco":
      return "Poco";
    case "redmi":
      return "Redmi";
    case "mi":
      return "Mi";
    case "modelp":
      return "P Model";
    case "modely":
      return "Y model";
    case "nine":
      return "9";
    case "ten":
      return "10";
    case "thirty":
      return "30";
    default:
      return;
  }
}

MenuCreator.propTypes = {
  currBrandUrl: PropTypes.string.isRequired,
  brandDevices: PropTypes.array.isRequired,
  generationsOfDevices: PropTypes.object.isRequired,
  iphones: PropTypes.array,
  ipads: PropTypes.array,
  // macbooks: PropTypes.array,
};

export default withRouter(MenuCreator);
