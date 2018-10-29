import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import auth from './auth/reducer';

const reducer = combineReducers({
    'auth': auth
});

export const store = createStore(reducer, applyMiddleware(thunk));
