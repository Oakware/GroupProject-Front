import * as types from './action-types';

function loadToken() {
    try {
        return JSON.parse(localStorage['auth:token']);
    } catch (e) {
        return null;
    }
}

function saveToken(token) {
    localStorage['auth:token'] = JSON.stringify(token);
}

const initialState = {
    token: loadToken(),
    authFailed: false,
    authErrors: [],
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.TOKEN_FETCHED:
            saveToken(action.token);
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
    return state.auth.token.userId;
}
