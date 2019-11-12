import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
import { createLogger } from "redux-logger";

export default createStore(rootReducer, applyMiddleware(thunk, createLogger()));
