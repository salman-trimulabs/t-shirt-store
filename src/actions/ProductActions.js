import { PRE_REQUEST, POST_REQUEST, ADD_PRODUCTS } from '../utils/constants'

export const getProducts = (products) => ({
  type: ADD_PRODUCTS,
  data: products,
});

export const preRequest = () => ({
  type: PRE_REQUEST,
});

export const postRequest = () => ({
  type: POST_REQUEST,
});

export default function fetchProducts(page = 1, limit = 20) {
  return function (dispatch) {
  dispatch(preRequest())
   return fetch(`https://backendapi.turing.com/products?page=${page}&limit=${limit}&description_length=200`)
      .then(response => response.json())
      .then((json) => {
        dispatch(getProducts(json.rows));
      })
      .catch( error => console.log('An error occurred.', error),);
  };
}
