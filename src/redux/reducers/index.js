import { combineReducers } from "redux";
import apple from "./appleReducer";

const rootReducer = combineReducers({
  apple,
});

export default rootReducer;
