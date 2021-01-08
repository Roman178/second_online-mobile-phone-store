import { combineReducers } from "redux";
import { appleReducer, samsungReducer } from "./appleReducer";
import cart from "./cartReducer";
import currentDevice from "./devicePageReducer";

const rootReducer = combineReducers({
  cart,
  apple: appleReducer,
  samsung: samsungReducer,
  currentDevice,
});

export default rootReducer;
