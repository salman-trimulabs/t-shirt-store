import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
import { createLogger } from "redux-logger";
import {routerMiddleware}from "connected-react-router";
import { createBrowserHistory as createHistory } from 'history'
export const history = createHistory();
const routeMiddlewareCreate =  routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer(history), composeEnhancers(applyMiddleware(routeMiddlewareCreate, thunk, createLogger())));
