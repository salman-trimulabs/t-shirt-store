import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../../utils/constants";

const CartItems = (
  state = { cartItems:[] },
  action
) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return { ...state, cartItems: [...state.cartItems, action.item]};
    case REMOVE_CART_ITEM:
      let newCartItems = state.cartItems.filter(item=> action.item.product_id !== item.product_id)
      return { ...state, cartItems: [...newCartItems]};
    default:
      return state;
  }
};

export default CartItems;
