import * as types from './action-types';

function getToken() {
    try {
        return JSON.parse(localStorage['auth:token']);
    } catch (e) {
        return null;
    }
}

function setToken(token) {
    localStorage['auth:token'] = JSON.stringify(token);
}

const initialState = {
    authToken: getToken()
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.TOKEN_FETCHED:
            setToken(action.authToken);
            return {
                ...state,
                authToken: action.authToken
            };
        default:
            return state;
    }
}
