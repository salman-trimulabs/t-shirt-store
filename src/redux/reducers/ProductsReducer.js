import { PRE_REQUEST, POST_REQUEST, ADD_PRODUCTS, PRODUCT_DETAIL } from '../../utils/constants'
;
const reducer = (state = { products : [] }, action) => {
  switch (action.type) {
    case ADD_PRODUCTS: 
      return {...state, products:action.data};
    case PRODUCT_DETAIL:
      return {...state, productDetail: action.data};
    case PRE_REQUEST:
        return { ...state };
      case POST_REQUEST:
        return { ...state };
    default:
      return state;
  }
};

export default reducer;