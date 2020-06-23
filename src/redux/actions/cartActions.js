import * as types from "./actionsTypes";
import { getCart, addItem, deleteItem } from "../../api/cartApi";

export function loadCartSuccess(cart) {
  return { type: types.LOAD_CART_SUCCESS, cart };
}

export function addItemToCartSuccess(item) {
  return { type: types.ADD_ITEM_TO_CART, item };
}

export function deleteItemFromCartSuccess(item) {
  return { type: types.DELETE_ITEM_FROM_CART, item };
}

export function addItemToCart(item) {
  return function (dispatch) {
    return addItem(item)
      .then((addedItem) => dispatch(addItemToCartSuccess(addedItem)))
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

export function deleteItemFromCart(item) {
  return (dispatch) => {
    return deleteItem(item).then((deletedItem) =>
      dispatch(deleteItemFromCartSuccess(deletedItem)).catch((error) =>
        console.error(error)
      )
    );
  };
}
