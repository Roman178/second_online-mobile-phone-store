import * as types from "./actionsTypes";
import {
  getCart,
  addItem,
  deleteItem,
  updateCartApi,
  cleanCartApi,
} from "../../api/cartApi";

export function loadCartSuccess(cart) {
  return { type: types.LOAD_CART_SUCCESS, cart };
}

export function addItemToCartSuccess(item) {
  return { type: types.ADD_ITEM_TO_CART, item };
}

export function deleteItemFromCartSuccess(item) {
  return { type: types.DELETE_ITEM_FROM_CART, item };
}

export function updateCartSuccess(updatedCart) {
  return { type: types.UPDATE_CART_SUCCESS, updatedCart };
}

export function cleanCartSuccess(currentCart) {
  return { type: types.CLEAN_CART_SUCCESS, currentCart };
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
    dispatch(deleteItemFromCartSuccess(item));
    return deleteItem(item);
  };
}

export function updateCart(updatedCart) {
  return function (dispatch) {
    dispatch(updateCartSuccess(updatedCart));
    return updatedCart.forEach((item) => updateCartApi(item));
  };
}

export function cleanCart(currentCart) {
  return function (dispatch) {
    dispatch(cleanCartSuccess(currentCart));
    return currentCart.forEach((item) => cleanCartApi(item));
  };
}
