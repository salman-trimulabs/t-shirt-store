import { PRE_REQUEST, POST_REQUEST, ADD_PRODUCTS } from '../../utils/constants'
;
const reducer = (state = { products : [] , loading : false }, action) => {
  switch (action.type) {
    case ADD_PRODUCTS: 
      return {...state, loading: false, products:action.data};
    case PRE_REQUEST:
        return { ...state, loading: true };
      case POST_REQUEST:
        return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;