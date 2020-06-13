import * as types from "./actionsTypes";
import { getCart } from "../../api/cartApi";
import { addItem } from "../../api/cartApi";

export function loadCartSuccess(cart) {
  return { type: types.LOAD_CART_SUCCESS, cart };
}

export function addItemToCartSuccess(item) {
  return { type: types.ADD_ITEM_TO_CART, item };
}

export function deleteItemFromCart(item) {
  return { type: types.DELETE_ITEM_FROM_CART, item };
}

export function addItemToCart(item) {
  return function (dispatch) {
    return addItem(item)
      .then((respondedItem) => dispatch(addItemToCartSuccess(respondedItem)))
      .catch((error) => console.error(error));
  };
}

export function loadCart() {
  return function (dispatch) {
    return getCart()
      .then((cart) => {
        dispatch(loadCartSuccess(cart));
      })
      .catch((error) => console.error(error));
  };
}
