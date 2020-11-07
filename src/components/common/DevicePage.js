import React from "react";
import { Image } from "antd";
import iphone11ProMaxImg from "../../img/iphone_11_pro_max.jpg";

function DevicePage(props) {
  console.log(props);
  return (
    <>
      <h1>Device Page</h1>
      <div>
        <h2>Apple iPhone SE 64Gb</h2>
        <Image width={400} src={iphone11ProMaxImg}></Image>
      </div>
    </>
  );
}

export default DevicePage;

// "https://cdn2.biggeek.ru/1/435/91cd/11342-817white.jpeg"
