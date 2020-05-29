import * as types from "./actionsTypes";
import { getApple } from "../../api/appleApi";

export function loadAppleSuccess(apple) {
  debugger;
  return { type: types.LOAD_APPLE_SUCCESS, apple };
}

export function loadApple() {
  return function (dispatch) {
    debugger;
    return getApple()
      .then((apple) => {
        debugger;
        dispatch(loadAppleSuccess(apple));
      })
      .catch((error) => console.log(error));
  };
}
