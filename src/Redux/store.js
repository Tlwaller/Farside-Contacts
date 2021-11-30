import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';
import clientReducer from './reducers/clientReducer';

const rootReducer = combineReducers({
    userReducer,
    clientReducer
});

export default createStore(rootReducer, applyMiddleware(promise));