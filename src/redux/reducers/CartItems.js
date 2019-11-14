import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "../../utils/constants";

const initialProductDetails = {
  name: "Name",
  price: "0.00",
  description: "Product description",
  thumbnail: ""
};

const CartItems = (
  state = { item: initialProductDetails },
  action
) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return { ...state, item: action.item };
    case REMOVE_CART_ITEM:
      return { ...state, item: action.item };
    default:
      return state;
  }
};

export default CartItems;
