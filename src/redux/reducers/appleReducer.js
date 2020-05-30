import * as types from "../actions/actionsTypes";
import initialState from "./initialState";

export default function appleReducer(state = initialState.apple, action) {
  switch (action.type) {
    case types.LOAD_APPLE_SUCCESS:
      return action.apple;
    default:
      return state;
  }
}
