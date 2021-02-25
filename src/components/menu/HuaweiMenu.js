import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router";
import MenuCreator from "./MenuCreator";

const HuaweiMenu = (props) => {
  const huaweiDevices = Object.keys(props.huawei);

  const generationsOfHuaweiDevices = {
    modelp: [...new Set(props.modelp.map((i) => i.title))],
    modely: [...new Set(props.modely.map((i) => i.title))],
  };

  return (
    <MenuCreator
      currBrandUrl="/huawei/"
      brandDevices={huaweiDevices}
      generationsOfDevices={generationsOfHuaweiDevices}
      modelp={props.modelp}
      modely={props.modely}
    />
  );
};

HuaweiMenu.propTypes = {
  huawei: PropTypes.object.isRequired,
  modelp: PropTypes.array.isRequired,
  modely: PropTypes.array.isRequired,
};

export default withRouter(HuaweiMenu);
