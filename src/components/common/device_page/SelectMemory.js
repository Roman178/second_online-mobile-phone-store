import React from "react";
import { Radio } from "antd";

const SelectMemory = (props) => {
  return (
    <div className="features-block-memory">
      <h6>Memory</h6>
      <Radio.Group onChange={props.onChange} value={props.currentMemory}>
        {props.availableMemory.map((m) => {
          return <Radio.Button value={parseInt(m)}>{m}</Radio.Button>;
        })}
      </Radio.Group>
    </div>
  );
};

export default SelectMemory;
