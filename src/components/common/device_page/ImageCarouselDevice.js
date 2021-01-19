import React from "react";
import { useState } from "react";

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

  return (
    <div>
      <div className="container-product-slider">
        <div className={cssClass}>
          <div className="img-container">
            <Image
              height={"100%"}
              width={"100%"}
              className="img-element"
              src={firstImgWhite}
            ></Image>
          </div>
          <div className="img-container">
            <Image
              height={"100%"}
              width={"100%"}
              className="img-element"
              src={secondImgWhite}
            ></Image>
          </div>
          <div className="img-container">
            <Image
              height={"100%"}
              width={"100%"}
              className="img-element"
              src={thirdImgWhite}
            ></Image>
          </div>
          <div className="img-container">
            <Image
              height={"100%"}
              width={"100%"}
              className="img-element"
              src={fourthImgWhite}
            ></Image>
          </div>
        </div>
      </div>

      <div className="tape-container">
        <LeftOutlined
          className="arrow-btn"
          onClick={() => checkClassOnTheLeft()}
        ></LeftOutlined>
        <button
          className="img-container-btn"
          onClick={() => setCssClass("secondary-container-0")}
        >
          {" "}
          <img height={60} className="img-element" src={firstImgWhite}></img>
        </button>

        <button
          className="img-container-btn"
          onClick={() => setCssClass("secondary-container-500")}
        >
          {" "}
          <img height={60} className="img-element" src={secondImgWhite}></img>
        </button>

        <button
          className="img-container-btn"
          onClick={() => setCssClass("secondary-container-1000")}
        >
          {" "}
          <img height={60} className="img-element" src={thirdImgWhite}></img>
        </button>

        <button
          className="img-container-btn"
          onClick={() => setCssClass("secondary-container-1500")}
        >
          {" "}
          <img height={60} className="img-element" src={fourthImgWhite}></img>
        </button>
        <RightOutlined
          className="arrow-btn"
          onClick={() => checkClassOnTheRight()}
        ></RightOutlined>
      </div>
    </div>
  );
}

export default ImageCarouselDevice;
