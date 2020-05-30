import * as types from "./actionsTypes";
import { getApple } from "../../api/appleApi";

export function loadAppleSuccess(apple) {
  return { type: types.LOAD_APPLE_SUCCESS, apple };
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
