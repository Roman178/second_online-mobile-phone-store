import * as types from "./actionsTypes";
import { getApple } from "../../api/appleApi";
import { getSamsung } from "../../api/appleApi";

export function loadAppleSuccess(apple) {
  return { type: types.LOAD_APPLE_SUCCESS, apple };
}

export function loadSamsungSuccess(samsung) {
  return { type: types.LOAD_SAMSUNG_SUCCESS, samsung };
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
