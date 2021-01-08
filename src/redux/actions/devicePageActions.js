import * as types from "./actionsTypes";

export function addCurrentDevice(item) {
  return { type: types.ADD_CURRENT_DEVICE, item };
}

export function deleteCurrentDevice(item) {
  return { type: types.DELETE_CURRENT_DEVICE, item };
}
