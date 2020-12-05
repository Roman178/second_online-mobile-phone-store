import React from "react";
import { useState, useEffect } from "react";
import { Image } from "antd";
import iphone11ProMaxImg from "../../img/iphone_11_pro_max.jpg";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./DevicePage.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function DevicePage(props) {
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

  const firstImg =
    "https://cdn.svyaznoy.ru/upload/iblock/53a/iphone_11_w_4.jpg/resize/483x483/hq/";
  const secondImg =
    "https://cdn.svyaznoy.ru/upload/iblock/d92/iphone_11_w_3.jpg/resize/483x483/hq/";
  const thirdImg =
    "https://cdn.svyaznoy.ru/upload/iblock/48e/iphone_11_w_1.jpg/resize/483x483/hq/";
  const fourth =
    "https://cdn.svyaznoy.ru/upload/iblock/db9/iphone_11_w_2.jpg/resize/483x483/hq/";

  return (
    <>
      <div className="container-product-slider">
        {/* <ImageGallery items={images} showNav={false} /> */}

        <div className={cssClass}>
          <div className="img-container">
            <img className="img-element" src={firstImg}></img>
          </div>
          <div className="img-container">
            <img className="img-element" src={secondImg}></img>
          </div>
          <div className="img-container">
            <img className="img-element" src={thirdImg}></img>{" "}
          </div>
          <div className="img-container">
            <img className="img-element" src={fourth}></img>
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
          <img height={60} className="img-element" src={firstImg}></img>
        </button>

        <button
          className="img-container-btn"
          onClick={() => setCssClass("secondary-container-500")}
        >
          {" "}
          <img height={60} className="img-element" src={secondImg}></img>
        </button>

        <button
          className="img-container-btn"
          onClick={() => setCssClass("secondary-container-1000")}
        >
          {" "}
          <img height={60} className="img-element" src={thirdImg}></img>
        </button>

        <button
          className="img-container-btn"
          onClick={() => setCssClass("secondary-container-1500")}
        >
          {" "}
          <img height={60} className="img-element" src={fourth}></img>
        </button>
        <RightOutlined
          className="arrow-btn"
          onClick={() => checkClassOnTheRight()}
        ></RightOutlined>
      </div>
    </>
  );
}

export default DevicePage;

// "https://cdn2.biggeek.ru/1/435/91cd/11342-817white.jpeg"

// {/* <h2>Apple iPhone SE 64Gb</h2>
//   <Image width={400} src={iphone11ProMaxImg}></Image> */}
