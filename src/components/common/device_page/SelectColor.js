import React from "react";
import PropTypes from "prop-types";

function SelectColor(props) {
  return (
    <div className="features-block-color">
      <h6>Color</h6>
      {props.availableColors.map((color) => (
        <button
          key={color}
          className="colors"
          style={{
            border:
              color === props.currentDeviceColor
                ? "2px solid rgb(64 169 255)"
                : "none",
            backgroundColor: color,
            borderRadius: "100px",
          }}
          value={color}
          onClick={props.onChangeColor}
        ></button>
      ))}
    </div>
  );
}

SelectColor.propTypes = {
  availableColors: PropTypes.array.isRequired,
  currentDeviceColor: PropTypes.string,
  onChangeColor: PropTypes.func.isRequired,
};

export default SelectColor;
