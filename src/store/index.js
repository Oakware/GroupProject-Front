import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import auth from './auth/reducer';
import profiles from './profiles/reducer';
import services from './services/reducer';

export const reducer = combineReducers({
    auth,
    profiles,
    services,
});

export function configureStore() {
    const store = createStore(reducer, applyMiddleware(thunk));

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./', () => store.replaceReducer(reducer))
    }

    return store;
}
