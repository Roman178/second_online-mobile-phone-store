import React from "react";
import { Radio } from "antd";

const SelectMemory = (props) => {
  return (
    <div style={{ marginBottom: "7%" }}>
      <h6 style={{ color: "#9d9ea0" }}>Memory</h6>
      <Radio.Group onChange={props.onChange} value={props.currentMemory}>
        {props.availableMemory.map((m) => {
          return <Radio.Button value={parseInt(m)}>{m}</Radio.Button>;
        })}
      </Radio.Group>
    </div>
  );
};

export default SelectMemory;
