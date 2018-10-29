import * as types from './action-types';

const initialState = {
    token: localStorage['auth:token'],
    selectedTopicUrls: [],
    selectionFinalized: false
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
