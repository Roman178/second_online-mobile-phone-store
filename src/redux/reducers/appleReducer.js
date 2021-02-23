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

export function xiaomiReducer(state = initialState.xiaomi, action) {
  switch (action.type) {
    case types.LOAD_XIAOMI_SUCCESS:
      return action.xiaomi;
    default:
      return state;
  }
}

export function honorReducer(state = initialState.honor, action) {
  switch (action.type) {
    case types.LOAD_HONOR_SUCCESS:
      return action.honor;
    default:
      return state;
  }
}

export function huaweiReducer(state = initialState.huawei, action) {
  switch (action.type) {
    case types.LOAD_HUAWEI_SUCCESS:
      return action.huawei;
    default:
      return state;
  }
}
