import React from "react";
import { AutoComplete } from "antd";
import { withRouter } from "react-router";

function Search(props) {
  return (
    <AutoComplete
      className="auto-complete"
      allowClear={true}
      options={props.options}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      // style={{
      //   width: 300,
      // }}
      onSelect={(foundDevice) => {
        const objOfFoundDevice = props.options.find(
          (d) => d.value === foundDevice
        );
        return props.history.push(
          `/${objOfFoundDevice.brand.toLowerCase()}/${
            objOfFoundDevice.category
          }/${objOfFoundDevice.url}`
        );
      }}
      placeholder="iPhone 11"
    />
  );
}

export default withRouter(Search);
