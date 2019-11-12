import { PRE_REQUEST, POST_REQUEST, PRODUCT_DETAIL } from '../../utils/constants'

export const getProduct = (product) => ({
  type: PRODUCT_DETAIL,
  data: product,
});

export const preRequest = () => ({
  type: PRE_REQUEST,
});

export const postRequest = () => ({
  type: POST_REQUEST,
});

export default function fetchProduct(id = 1) {
  return function (dispatch) {
  dispatch(preRequest())
   return fetch(`https://backendapi.turing.com/products/${id}`)
      .then(response => response.json())
      .then((json) => {
        dispatch(getProduct(json));
      })
      .catch( error => console.log('An error occurred.', error),);
  };
}
