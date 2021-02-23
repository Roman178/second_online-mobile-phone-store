import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router";
import MenuCreator from "./MenuCreator";

const XiaomiMenu = (props) => {
  const xiaomiDevices = Object.keys(props.xiaomi);

  const generationsOfXiaomiDevices = {
    poco: [...new Set(props.poco.map((i) => i.title))],
  };

  return (
    <MenuCreator
      currBrandUrl="/xiaomi/"
      brandDevices={xiaomiDevices}
      generationsOfDevices={generationsOfXiaomiDevices}
      poco={props.poco}
    />
  );
};

XiaomiMenu.propTypes = {
  xiaomi: PropTypes.object.isRequired,
  poco: PropTypes.array.isRequired,
};

export default withRouter(XiaomiMenu);
