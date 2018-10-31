import * as types from './action-types';

function getToken() {
    try {
        return JSON.parse(localStorage['auth:token']);
    } catch (e) {
        return null;
    }
}

const initialState = {
    token: getToken()
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