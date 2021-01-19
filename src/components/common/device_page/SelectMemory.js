import React from "react";
import { Radio } from "antd";

const SelectMemory = (props) => {
  return (
    <Radio.Group
      onChange={props.onChange}
      value={props.currentMemory}
      // {parseInt(props.theReduxStore.currentDevice.memory)}
    >
      {props.availableMemory.map((m) => {
        return <Radio.Button value={parseInt(m)}>{m}</Radio.Button>;
      })}

      {/* <Radio.Button value={64}>64 Gb</Radio.Button>
        <Radio.Button value={128}>128 Gb</Radio.Button>
        <Radio.Button value={256}>256 Gb</Radio.Button> */}
    </Radio.Group>
  );
};

export default SelectMemory;
