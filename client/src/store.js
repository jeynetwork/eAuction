import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store= createStore(rootReducer,initialState, applyMiddleware(...middleware));

export default store;