import productReducer from './ProductsReducer'
import cartItems from '../reducers/CartItems'
import filter from '../reducers/Filter'
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) => combineReducers({
    productReducer, filter, cartItems,
    router: connectRouter(history)
});
export default rootReducer;