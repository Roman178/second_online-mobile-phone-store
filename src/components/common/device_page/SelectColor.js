import React from "react";

function SelectColor(props) {
  return (
    <div className="features-block-color">
      <h6>Color</h6>
      {props.availableColors.map((color) => (
        <button
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

export default SelectColor;
