import React from "react";
import PropTypes from "prop-types";
import { AutoComplete } from "antd";
import { withRouter } from "react-router";

function Search(props) {
  //   function searchItem(inputValue, option) {
  //     if (inputValue.includes(" ")) {
  //       let arr = inputValue.split(" ");
  //       return option.value.toUpperCase().includes(arr[1].toUpperCase());
  //     } else {
  //       return option.value.toUpperCase().includes(inputValue.toUpperCase());
  //     }
  //   }

  return (
    <AutoComplete
      className="auto-complete"
      allowClear={true}
      options={props.options}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().includes(inputValue.toUpperCase())
      }
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

Search.propTypes = {
  options: PropTypes.array.isRequired,
};

export default withRouter(Search);
