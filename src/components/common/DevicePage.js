import React from "react";
import { useState, useEffect } from "react";
import { Image, Skeleton } from "antd";
import { connect } from "react-redux";
import SelectColor from "./device_page/SelectColor";
import SelectMemory from "./device_page/SelectMemory";

import iphone11ProMaxImg from "../../img/iphone_11_pro_max.jpg";
import "./DevicePage.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Radio } from "antd";

import {
  addCurrentDevice,
  deleteCurrentDevice,
} from "../../redux/actions/devicePageActions";

function DevicePage(props) {
  // const [value, setValue] = useState(0);
  // const [color, setColor] = useState("");
  const [cssClass, setCssClass] = useState("secondary-container-0");

  function getArrSameTypesOfDevices() {
    const arrCurrentDevice = props.location.pathname.split("/");
    const arrTheSameTypesOfDevices =
      props.theReduxStore[arrCurrentDevice[1]][arrCurrentDevice[2]];
    return arrTheSameTypesOfDevices;
  }
  const theSameTypesOfDevices = getArrSameTypesOfDevices();

  function getCurrentDevice() {
    // const arrCurrentDevice = props.location.pathname.split("/");
    // const arrTheSameDevices =
    //   props.theReduxStore[arrCurrentDevice[1]][arrCurrentDevice[2]];
    const objCurrentDevice = theSameTypesOfDevices.find(
      (item) => item.url === props.match.params.urlName
    );
    return objCurrentDevice;
  }
  const currentDevice = getCurrentDevice();

  const reallyTheSameDevices = theSameTypesOfDevices.filter(
    (item) => item.title === props.theReduxStore.currentDevice.title
  );

  const availableColors = [
    ...new Set(reallyTheSameDevices.map((i) => i.color)),
  ];

  const arrOfAvailableMemoryDevice = [
    ...new Set(reallyTheSameDevices.map((i) => i.memory)),
  ];

  useEffect(
    function () {
      if (currentDevice) props.dispatch(addCurrentDevice(currentDevice));
      return () => props.dispatch(deleteCurrentDevice(currentDevice));
    },
    [currentDevice]
  );

  console.log(props);

  // useEffect(() => {
  //   setValue(parseInt(props.theReduxStore.currentDevice.memory), 10);
  //   setColor(props.theReduxStore.currentDevice.color);
  // }, [props.theReduxStore.currentDevice]);

  // console.log(theSameTypesOfDevices);

  // const arrCurrentDevice = props.location.pathname.split("/");
  // const arrTheSameDevices =
  //   props.theReduxStore[arrCurrentDevice[1]][arrCurrentDevice[2]];

  // const objCurrentDevice = arrTheSameDevices.find(
  //   (item) => item.url === props.match.params.urlName
  // );

  // useEffect(() => {
  //   if (objCurrentDevice) setValue(parseInt(objCurrentDevice.memory), 10);
  // }, [objCurrentDevice]);

  function onChange(e) {
    const nextDevice = reallyTheSameDevices.find(
      (item) =>
        parseInt(item.memory, 10) === e.target.value &&
        item.color === props.theReduxStore.currentDevice.color
    );
    const nextUrl = props.location.pathname.replace(
      props.match.params.urlName,
      nextDevice.url
    );
    // console.log(nextUrl);

    props.history.push(nextUrl);

    // console.log("radio checked", e.target.value);
    // setValue(e.target.value);
  }

  function handleChangeColor(e) {
    console.log(e.target.value);
    const nextDevice = reallyTheSameDevices.find(
      (item) =>
        item.color === e.target.value &&
        item.memory === props.theReduxStore.currentDevice.memory
    );
    const nextUrl = props.location.pathname.replace(
      props.match.params.urlName,
      nextDevice.url
    );
    props.history.push(nextUrl);
  }

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

  // const firstImgWhite =
  //   "https://cdn.svyaznoy.ru/upload/iblock/53a/iphone_11_w_4.jpg/resize/483x483/hq/";
  // const secondImgWhite =
  //   "https://cdn.svyaznoy.ru/upload/iblock/d92/iphone_11_w_3.jpg/resize/483x483/hq/";
  // const thirdImgWhite =
  //   "https://cdn.svyaznoy.ru/upload/iblock/48e/iphone_11_w_1.jpg/resize/483x483/hq/";
  // const fourthImgWhite =
  //   "https://cdn.svyaznoy.ru/upload/iblock/db9/iphone_11_w_2.jpg/resize/483x483/hq/";

  const firstImgWhite =
    "https://cdn.svyaznoy.ru/upload/iblock/937/iphone_11_w_4.jpg/resize/870x725/hq/";
  const secondImgWhite =
    "https://cdn.svyaznoy.ru/upload/iblock/6b1/iphone_11_w_3.jpg/resize/870x725/hq/";
  const thirdImgWhite =
    "https://cdn.svyaznoy.ru/upload/iblock/48e/iphone_11_w_1.jpg/resize/870x725/hq/";
  const fourthImgWhite =
    "https://cdn.svyaznoy.ru/upload/iblock/02c/iphone_11_w_2.jpg/resize/870x725/hq/";

  return (
    <>
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

      <SelectMemory
        onChange={onChange}
        currentMemory={parseInt(props.theReduxStore.currentDevice.memory)}
        availableMemory={arrOfAvailableMemoryDevice}
      />

      <SelectColor
        availableColors={availableColors}
        currentDeviceColor={props.theReduxStore.currentDevice.color}
        onChangeColor={handleChangeColor}
      />
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    theReduxStore: state,
  };
}

export default connect(mapStateToProps)(DevicePage);

// "https://cdn2.biggeek.ru/1/435/91cd/11342-817white.jpeg"

// {/* <h2>Apple iPhone SE 64Gb</h2>
//   <Image width={400} src={iphone11ProMaxImg}></Image> */}
