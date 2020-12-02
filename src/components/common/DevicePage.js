import React from "react";
import { useState, useEffect } from "react";
import { Image } from "antd";
import iphone11ProMaxImg from "../../img/iphone_11_pro_max.jpg";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./DevicePage.css";

// const images = [
//   {
//     original:
//       "https://cdn.svyaznoy.ru/upload/iblock/53a/iphone_11_w_4.jpg/resize/483x483/hq/",
//     originalClass: "big-img",
//     thumbnail:
//       "https://cdn.svyaznoy.ru/upload/iblock/53a/iphone_11_w_4.jpg/resize/63x63/",
//     thumbnailClass: "small-img",
//   },
//   {
//     original:
//       "https://cdn.svyaznoy.ru/upload/iblock/d92/iphone_11_w_3.jpg/resize/483x483/hq/",
//     originalClass: "big-img",

//     thumbnail:
//       "https://cdn.svyaznoy.ru/upload/iblock/d92/iphone_11_w_3.jpg/resize/63x63/",
//     thumbnailClass: "small-img",
//   },
// ];

function DevicePage(props) {
  console.log(props);
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
    <>
      <div className="container-product-slider">
        {/* <ImageGallery items={images} showNav={false} /> */}

        <div className={cssClass}>
          <div className="img-container">
            <img
              className="img-element"
              src="https://cdn.svyaznoy.ru/upload/iblock/53a/iphone_11_w_4.jpg/resize/483x483/hq/"
            ></img>
          </div>
          <div className="img-container">
            <img
              className="img-element"
              src="https://cdn.svyaznoy.ru/upload/iblock/d92/iphone_11_w_3.jpg/resize/483x483/hq/"
            ></img>
          </div>
          <div className="img-container">
            <img
              className="img-element"
              src="https://cdn.svyaznoy.ru/upload/iblock/48e/iphone_11_w_1.jpg/resize/483x483/hq/"
            ></img>
          </div>

          <div className="img-container">
            <img
              className="img-element"
              src="https://cdn.svyaznoy.ru/upload/iblock/db9/iphone_11_w_2.jpg/resize/483x483/hq/"
            ></img>
          </div>
        </div>
      </div>
      <button onClick={() => checkClassOnTheLeft()}>
        {" "}
        <img
          width={50}
          className="img-element"
          src="https://cdn.svyaznoy.ru/upload/iblock/48e/iphone_11_w_1.jpg/resize/483x483/hq/"
        ></img>
      </button>

      <button onClick={() => checkClassOnTheRight()}>
        {" "}
        <img
          width={50}
          className="img-element"
          src="https://cdn.svyaznoy.ru/upload/iblock/db9/iphone_11_w_2.jpg/resize/483x483/hq/"
        ></img>
      </button>
    </>
  );
}

export default DevicePage;

// "https://cdn2.biggeek.ru/1/435/91cd/11342-817white.jpeg"

// {/* <h2>Apple iPhone SE 64Gb</h2>
//   <Image width={400} src={iphone11ProMaxImg}></Image> */}
