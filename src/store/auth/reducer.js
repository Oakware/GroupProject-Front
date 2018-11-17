import * as types from './action-types';
import * as Auth from '../../microservices/auth';

const initialState = {
    token: Auth.loadToken(),
    authFailed: false,
    authErrors: [],
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.TOKEN_FETCHED:
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }
}

export function isUserAuthenticated(state) {
    return state.auth.token != null;
}

export function getToken(state) {
    return state.auth.token;
}

export function getUserId(state) {
    if (state.auth.token)
        return state.auth.token.userId;
    return undefined;
}
