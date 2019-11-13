import {
  SEARCH,
  PRICE_HIGH_TO_LOW,
  PRICE_LOW_TO_HIGH,
  ALL_PRODUCTS
} from "../../utils/constants";

const filtersReducerDefaultState = {
  text: ""
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        sortBy: "searchText",
        text: action.text
      };
    case PRICE_HIGH_TO_LOW:
      return {
        ...state,
        sortBy: "highToLow"
      };
    case PRICE_LOW_TO_HIGH:
      return {
        ...state,
        sortBy: "lowToHigh"
      };
    case ALL_PRODUCTS:
      return {
        ...state,
        sortBy: "allProducts"
      };
    default:
      return state;
  }
};
