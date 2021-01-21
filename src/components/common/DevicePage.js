import React from "react";
import { useState, useEffect } from "react";
import { Image, Skeleton } from "antd";
import { connect } from "react-redux";
import SelectColor from "./device_page/SelectColor";
import SelectMemory from "./device_page/SelectMemory";
import ImageCarouselDevice from "./device_page/ImageCarouselDevice";

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

  function getUrlsImages() {
    const arr = [];
    for (const key in props.theReduxStore.currentDevice) {
      if (key.startsWith("image")) {
        arr.push(props.theReduxStore.currentDevice[key]);
      }
    }
    return arr;
  }
  const urlsImages = getUrlsImages();

  function getObjUrlsImages() {
    let obj = {};
    for (const key in props.theReduxStore.currentDevice) {
      if (key.startsWith("image")) {
        obj = { ...obj, [key]: props.theReduxStore.currentDevice[key] };
      }
    }
    return obj;
  }
  const objUrlsImages = getObjUrlsImages();

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

  return (
    <>
      <ImageCarouselDevice
        objUrlsImages={objUrlsImages}
        arrUrlsImages={urlsImages}
      />

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
