import { combineReducers } from "redux";
import { appleReducer, samsungReducer } from "./appleReducer";
import cart from "./cartReducer";

const rootReducer = combineReducers({
  cart,
  apple: appleReducer,
  samsung: samsungReducer,
});

export default rootReducer;
