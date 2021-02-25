import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router";
import MenuCreator from "./MenuCreator";

const XiaomiMenu = (props) => {
  const xiaomiDevices = Object.keys(props.xiaomi);

  const generationsOfXiaomiDevices = {
    poco: [...new Set(props.poco.map((i) => i.title))],
    redmi: [...new Set(props.redmi.map((i) => i.title))],
    mi: [...new Set(props.mi.map((i) => i.title))],
  };

  return (
    <MenuCreator
      currBrandUrl="/xiaomi/"
      brandDevices={xiaomiDevices}
      generationsOfDevices={generationsOfXiaomiDevices}
      poco={props.poco}
      redmi={props.redmi}
      mi={props.mi}
    />
  );
};

XiaomiMenu.propTypes = {
  xiaomi: PropTypes.object.isRequired,
  poco: PropTypes.array.isRequired,
  redmi: PropTypes.array.isRequired,
  mi: PropTypes.array.isRequired,
};

export default withRouter(XiaomiMenu);
