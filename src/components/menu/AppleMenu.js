import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";

import { withRouter } from "react-router";
import MenuCreator from "./MenuCreator";

const AppleMenu = (props) => {
  // const checkPage = props.location.pathname.includes("/", 1);
  // const [currentPageIsASubPage, setTrueOrFalseSubPage] = useState("");

  // useEffect(() => {
  //   return setTrueOrFalseSubPage(checkPage);
  // }, [props.location]);

  const appleDevices = Object.keys(props.apple);

  const generationsOfAppleDevices = {
    iphones: [...new Set(props.iphones.map((i) => i.title))],
    ipads: [...new Set(props.ipads.map((i) => i.title))],
    // macbooks: [...new Set(props.macbooks.map((i) => i.title))],
  };

  return (
    <MenuCreator
      currBrandUrl="/apple/"
      brandDevices={appleDevices}
      generationsOfDevices={generationsOfAppleDevices}
      iphones={props.iphones}
      ipads={props.ipads}
      // macbooks={props.macbooks}
    />
  );
};

AppleMenu.propTypes = {
  apple: PropTypes.object.isRequired,
  iphones: PropTypes.array.isRequired,
  ipads: PropTypes.array.isRequired,
  // macbooks: PropTypes.array.isRequired,
};

export default withRouter(AppleMenu);
