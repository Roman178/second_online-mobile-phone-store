import React from "react";
import { useState } from "react";
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

// const []

function DevicePage(props) {
  console.log(props);
  return (
    <>
      <div className="container-product-slider">
        {/* <ImageGallery items={images} showNav={false} /> */}

        <div className="secondary-container">
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
              src="https://cdn.svyaznoy.ru/upload/iblock/53a/iphone_11_w_4.jpg/resize/483x483/hq/"
            ></img>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          const el = document.getElementsByClassName("secondary-container");
          el[0].style.transition = "transform 0.5s ease-in";
          el[0].style.transform = "translateX(-500px)";
        }}
      ></button>
    </>
  );
}

export default DevicePage;

// "https://cdn2.biggeek.ru/1/435/91cd/11342-817white.jpeg"

// {/* <h2>Apple iPhone SE 64Gb</h2>
//   <Image width={400} src={iphone11ProMaxImg}></Image> */}
