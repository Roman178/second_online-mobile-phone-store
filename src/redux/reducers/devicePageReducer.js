import * as types from "../actions/actionsTypes";
import initialState from "../reducers/initialState";

export default function devicePageReducer(
  state = initialState.currentDevice,
  action
) {
  switch (action.type) {
    case types.ADD_CURRENT_DEVICE:
      return { ...action.item };
    case types.DELETE_CURRENT_DEVICE:
      return {};
    default:
      return state;
  }
}
