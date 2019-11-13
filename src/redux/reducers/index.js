import productReducer from './ProductsReducer'
import productDetailReducer from '../reducers/ProductDetail'
import filter from '../reducers/Filter'
import { combineReducers } from 'redux';

export default combineReducers({productReducer, productDetailReducer, filter})