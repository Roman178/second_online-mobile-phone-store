import { combineReducers } from "redux";
import apple from "./appleReducer";
import cart from "./cartReducer";

const rootReducer = combineReducers({
  cart,
  apple,
});

export default rootReducer;
