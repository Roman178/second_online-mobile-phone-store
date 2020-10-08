import * as types from "../actions/actionsTypes";
import initialState from "./initialState";

export function appleReducer(state = initialState.apple, action) {
  switch (action.type) {
    case types.LOAD_APPLE_SUCCESS:
      return action.apple;
    default:
      return state;
  }
}

export function samsungReducer(state = initialState.samsung, action) {
  switch (action.type) {
    case types.LOAD_SAMSUNG_SUCCESS:
      return action.samsung;
    default:
      return state;
  }
}
