import React from "react";
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Image } from "antd";

function ImageCarouselDevice(props) {
  const [cssClass, setCssClass] = useState("secondary-container-0");

  function checkClassOnTheRight() {
    switch (cssClass) {
      case "secondary-container-0":
        return setCssClass("secondary-container-500");
      case "secondary-container-500":
        return setCssClass("secondary-container-1000");
      case "secondary-container-1000":
        return setCssClass("secondary-container-1500");
      default:
        return undefined;
    }
  }

  function checkClassOnTheLeft() {
    switch (cssClass) {
      case "secondary-container-1500":
        return setCssClass("secondary-container-1000");
      case "secondary-container-1000":
        return setCssClass("secondary-container-500");
      case "secondary-container-500":
        return setCssClass("secondary-container-0");
      default:
        return undefined;
    }
  }

  function moveImgByClickOnImg(url) {
    switch (url) {
      case props.objUrlsImages.imageFirst:
        return "secondary-container-0";
      case props.objUrlsImages.imageSecond:
        return "secondary-container-500";
      case props.objUrlsImages.imageThird:
        return "secondary-container-1000";
      case props.objUrlsImages.imageFourth:
        return "secondary-container-1500";
      default:
        return;
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="container-product-slider">
        <div className={cssClass}>
          {props.arrUrlsImages.map((url) => (
            <div className="img-container">
              <Image
                height={"100%"}
                width={"100%"}
                className="img-element"
                src={url}
              ></Image>
            </div>
          ))}
        </div>
      </div>

      <div className="tape-container">
        <LeftOutlined
          className="arrow-btn"
          onClick={() => checkClassOnTheLeft()}
        ></LeftOutlined>

        {props.arrUrlsImages.map((url) => (
          <button
            className="img-container-btn"
            onClick={() => setCssClass(moveImgByClickOnImg(url))}
          >
            <img height={60} className="img-element" src={url} />
          </button>
        ))}

        <RightOutlined
          className="arrow-btn"
          onClick={() => checkClassOnTheRight()}
        ></RightOutlined>
      </div>
    </div>
  );
}

export default ImageCarouselDevice;
