import { PRE_REQUEST, POST_REQUEST, ADD_PRODUCTS, PRODUCT_DETAIL } from '../../utils/constants'

export const getProducts = (products) => ({
  type: ADD_PRODUCTS,
  data: products,
});

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

export function fetchProducts(page = 1) {
  return function (dispatch) {
  dispatch(preRequest())
   return fetch(`https://backendapi.turing.com/products?page=${page}&limit=20&description_length=200`)
      .then(response => response.json())
      .then((json) => {
        dispatch(getProducts(json.rows));
      })
      .catch( error => console.log('An error occurred.', error),);
  };
}

export function fetchProduct(id = 1) {
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
