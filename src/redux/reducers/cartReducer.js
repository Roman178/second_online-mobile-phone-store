import * as types from "../actions/actionsTypes";
import initialState from "../reducers/initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case types.LOAD_CART_SUCCESS:
      return action.cart;
    case types.ADD_ITEM_TO_CART:
      return [...state, { ...action.item }];
    case types.DELETE_ITEM_FROM_CART:
      return state.filter((item) => item.id !== action.item.id);
    case types.UPDATE_CART_SUCCESS:
      return action.updatedCart;
    default:
      return state;
  }
}
