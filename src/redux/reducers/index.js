import productReducer from './ProductsReducer'
import productDetailReducer from '../reducers/ProductDetail'
import { combineReducers } from 'redux';

export default combineReducers({productReducer, productDetailReducer})