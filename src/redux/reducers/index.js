import productReducer from './ProductsReducer'
import productDetailReducer from '../reducers/ProductDetail'
import cartItems from '../reducers/CartItems'
import filter from '../reducers/Filter'
import { combineReducers } from 'redux';

export default combineReducers({productReducer, productDetailReducer, filter, cartItems})