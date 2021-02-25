import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router";
import MenuCreator from "./MenuCreator";

const HonorMenu = (props) => {
  const honorDevices = Object.keys(props.honor);

  const generationsOfHonorDevices = {
    nine: [...new Set(props.nine.map((i) => i.title))],
    ten: [...new Set(props.ten.map((i) => i.title))],
    thirty: [...new Set(props.thirty.map((i) => i.title))],
  };

  return (
    <MenuCreator
      currBrandUrl="/honor/"
      brandDevices={honorDevices}
      generationsOfDevices={generationsOfHonorDevices}
      nine={props.nine}
      ten={props.ten}
      thirty={props.thirty}
    />
  );
};

HonorMenu.propTypes = {
  honor: PropTypes.object.isRequired,
  nine: PropTypes.array.isRequired,
  ten: PropTypes.array.isRequired,
  thirty: PropTypes.array.isRequired,
};

export default withRouter(HonorMenu);
