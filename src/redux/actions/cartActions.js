import * as types from "./actionsTypes";

export function addItemToCart(item) {
  return { type: types.ADD_ITEM_TO_CART, item };
}

export default function deleteItemFromCart(item) {
  return { type: types.DELETE_ITEM_FROM_CART, item };
}
