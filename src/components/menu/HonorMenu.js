import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router";
import MenuCreator from "./MenuCreator";

const HonorMenu = (props) => {
  const honorDevices = Object.keys(props.honor);

  const generationsOfHonorDevices = {
    nine: [...new Set(props.nine.map((i) => i.title))],
  };

  return (
    <MenuCreator
      currBrandUrl="/honor/"
      brandDevices={honorDevices}
      generationsOfDevices={generationsOfHonorDevices}
      nine={props.nine}
    />
  );
};

HonorMenu.propTypes = {
  honor: PropTypes.object.isRequired,
  nine: PropTypes.array.isRequired,
};

export default withRouter(HonorMenu);
