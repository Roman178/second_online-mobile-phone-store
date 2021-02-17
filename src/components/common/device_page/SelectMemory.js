import React from "react";
import PropTypes from "prop-types";
import { Radio } from "antd";

const SelectMemory = (props) => {
  return (
    <div className="features-block-memory">
      <h6>Memory</h6>
      <Radio.Group onChange={props.onChangeMemory} value={props.currentMemory}>
        {props.availableMemory.map((m, index) => {
          return (
            <Radio.Button key={m} value={parseInt(m)}>
              {m}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </div>
  );
};

SelectMemory.propTypes = {
  availableMemory: PropTypes.array.isRequired,
  currentMemory: PropTypes.number.isRequired,
  onChangeMemory: PropTypes.func.isRequired,
};

export default SelectMemory;
