import React from "react";
import PropTypes from "prop-types";

const CharacteristicsTable = (props) => {
  return (
    <div id="info-block">
      <ul className="features-block-characteristics">
        <li>
          Id: <span className="featuresDescr">{props.currentDevice.id}</span>
        </li>
        <li>
          Title:{" "}
          <span className="featuresDescr">{props.currentDevice.title}</span>
        </li>

        <li>
          Memory:{" "}
          <span className="featuresDescr">{props.currentDevice.memory}</span>
        </li>

        <li>
          Color:{" "}
          <span className="featuresDescr">{props.currentDevice.color}</span>
        </li>

        <li>
          Size: <span className="featuresDescr">6.1 inches</span>
        </li>

        <li>
          Protection:{" "}
          <span className="featuresDescr">Lorem ipsum dolor sit amet</span>
        </li>

        <li>
          Platform:{" "}
          <span className="featuresDescr">OS Duis aute irure dolor</span>
        </li>
      </ul>
    </div>
  );
};

CharacteristicsTable.propTypes = {
  currentDevice: PropTypes.object.isRequired,
};

export default CharacteristicsTable;
