import * as types from "../actions/actionsTypes";
import initialState from "../reducers/initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case types.ADD_ITEM_TO_CART:
      return [...state, { ...action.item }];
    default:
      return state;
  }
}
