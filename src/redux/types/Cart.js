import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../../utils/constants/";

export const addCartItem = (item) => ({
  type: ADD_CART_ITEM,
  item: item
});

export const removeCartItem = (item) => ({
  type: REMOVE_CART_ITEM,
  item: item
});
