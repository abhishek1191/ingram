import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import api from '../middlewares/api';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, applyMiddleware(thunk, api));
}