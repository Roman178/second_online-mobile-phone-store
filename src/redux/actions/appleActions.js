import * as types from "./actionsTypes";
import {
  getApple,
  getSamsung,
  getHonor,
  getHuawei,
  getXiaomi,
} from "../../api/appleApi";

export function loadAppleSuccess(apple) {
  return { type: types.LOAD_APPLE_SUCCESS, apple };
}

export function loadSamsungSuccess(samsung) {
  return { type: types.LOAD_SAMSUNG_SUCCESS, samsung };
}

export function loadXiaomiSuccess(xiaomi) {
  return { type: types.LOAD_XIAOMI_SUCCESS, xiaomi };
}

export function loadHonorSuccess(honor) {
  return { type: types.LOAD_HONOR_SUCCESS, honor };
}

export function loadHuaweiSuccess(huawei) {
  return { type: types.LOAD_HUAWEI_SUCCESS, huawei };
}

export function loadApple() {
  return function (dispatch) {
    return getApple()
      .then((apple) => {
        dispatch(loadAppleSuccess(apple));
      })
      .catch((error) => console.log(error));
  };
}

export function loadSamsung() {
  return function (dispatch) {
    return getSamsung()
      .then((samsung) => {
        dispatch(loadSamsungSuccess(samsung));
      })
      .catch((error) => console.error(error));
  };
}

export function loadXiaomi() {
  return function (dispatch) {
    return getXiaomi()
      .then((xiaomi) => {
        dispatch(loadXiaomiSuccess(xiaomi));
      })
      .catch((error) => console.error(error));
  };
}

export function loadHonor() {
  return function (dispatch) {
    return getHonor()
      .then((honor) => {
        dispatch(loadHonorSuccess(honor));
      })
      .catch((error) => console.error(error));
  };
}

export function loadHuawei() {
  return function (dispatch) {
    return getHuawei()
      .then((huawei) => {
        dispatch(loadHuaweiSuccess(huawei));
      })
      .catch((error) => console.error(error));
  };
}
