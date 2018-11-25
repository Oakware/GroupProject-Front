import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import auth from './auth/reducer';
import chat from './chat/reducer';
import profile from './profile/reducer';
import search from './search/reducer';
import service from './service/reducer';

export const reducer = combineReducers({
    auth,
    chat,
    profile,
    search,
    service,
});

export function configureStore() {
    const store = createStore(reducer, applyMiddleware(thunk));

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./', () => store.replaceReducer(reducer))
    }

    return store;
}
