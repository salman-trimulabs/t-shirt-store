import { PRE_REQUEST, POST_REQUEST, PRODUCT_DETAIL } from '../../utils/constants';

const initialProductDetails= {
  id: "0",
  thumbnail: undefined,
  name: "temp",
  price: "0.00 $",
  description: "blah blag blah"
}

const ProductDetailReducer = (state = { product : initialProductDetails, loading : false }, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL:
      return {...state, loading: false, product:action.data};
    case PRE_REQUEST:
        return { ...state, loading: true };
      case POST_REQUEST:
        return { ...state, loading: false };
    default:
      return state;
  }
};

export default ProductDetailReducer;