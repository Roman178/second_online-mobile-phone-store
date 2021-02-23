import { combineReducers } from "redux";
import {
  appleReducer,
  samsungReducer,
  xiaomiReducer,
  honorReducer,
  huaweiReducer,
} from "./appleReducer";
import cart from "./cartReducer";
import currentDevice from "./devicePageReducer";

const rootReducer = combineReducers({
  cart,
  apple: appleReducer,
  samsung: samsungReducer,
  xiaomi: xiaomiReducer,
  honor: honorReducer,
  huawei: huaweiReducer,
  currentDevice,
});

export default rootReducer;
