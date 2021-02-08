import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import SelectColor from "./device_page/SelectColor";
import SelectMemory from "./device_page/SelectMemory";
import ImageCarouselDevice from "./device_page/ImageCarouselDevice";
import CharacteristicsTable from "./device_page/CharacteristicsTable";
import { Button } from "antd";
import { addItemToCart } from "../../redux/actions/cartActions";
import { Anchor } from "antd";
import DeviceInfoBlock from "./device_page/DeviceInfoBlock";

import {
  addCurrentDevice,
  deleteCurrentDevice,
} from "../../redux/actions/devicePageActions";

function DevicePage(props) {
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
  const _currentDevice = getCurrentDevice();

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
      if (_currentDevice) props.dispatch(addCurrentDevice(_currentDevice));
      return () => props.dispatch(deleteCurrentDevice(_currentDevice));
    },
    [_currentDevice]
  );

  function getUrlsImages() {
    const arr = [];
    for (const key in props.currentDevice) {
      if (key.startsWith("image")) {
        arr.push(props.currentDevice[key]);
      }
    }
    return arr;
  }
  const urlsImages = getUrlsImages();

  function getObjUrlsImages() {
    let obj = {};
    for (const key in props.currentDevice) {
      if (key.startsWith("image")) {
        obj = { ...obj, [key]: props.currentDevice[key] };
      }
    }
    return obj;
  }
  const objUrlsImages = getObjUrlsImages();

  function onChange(e) {
    const nextDevice = reallyTheSameDevices.find(
      (item) =>
        parseInt(item.memory, 10) === e.target.value &&
        item.color === props.currentDevice.color
    );
    const nextUrl = props.location.pathname.replace(
      props.match.params.urlName,
      nextDevice.url
    );

    props.history.push(nextUrl);
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

  function handleAddToCart(item) {
    if (!props.cart.find((i) => i.id === item.id)) {
      props.dispatch(addItemToCart({ ...item, quantity: 1, cost: item.price }));
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "3%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ImageCarouselDevice
          objUrlsImages={objUrlsImages}
          arrUrlsImages={urlsImages}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "3%",
            maxWidth: "400px",
          }}
        >
          <h1 style={{ marginBottom: "10%", color: "#001529" }}>
            {props.currentDevice.title +
              " " +
              props.currentDevice.memory +
              " " +
              props.currentDevice.color}
          </h1>

          <Button
            onClick={() => handleAddToCart(props.currentDevice)}
            type="primary"
            size="large"
            style={{ marginBottom: "5%" }}
          >
            Add to Cart
          </Button>

          <SelectMemory
            onChange={onChange}
            currentMemory={parseInt(props.currentDevice.memory)}
            availableMemory={arrOfAvailableMemoryDevice}
          />

          <SelectColor
            availableColors={availableColors}
            currentDeviceColor={props.currentDevice.color}
            onChangeColor={handleChangeColor}
          />

          <CharacteristicsTable currentDevice={props.currentDevice} />
          <a href="#info-block">See more...</a>
        </div>
      </div>
      <DeviceInfoBlock />
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    theReduxStore: state,
    currentDevice: state.currentDevice,
    cart: state.cart,
  };
}

// const mapDispatchToProps = {
//   addItemToCart,
// };

export default connect(mapStateToProps)(DevicePage);
