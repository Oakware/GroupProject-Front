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
    authToken: loadToken()
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.TOKEN_FETCHED:
            saveToken(action.authToken);
            return {
                ...state,
                authToken: action.authToken
            };
        default:
            return state;
    }
}

export function isUserAuthenticated(state) {
    return state.auth.authToken != null;
}

export function getToken(state) {
    return state.auth.authToken;
}

export function getUserId(state) {
    return 1;
}
