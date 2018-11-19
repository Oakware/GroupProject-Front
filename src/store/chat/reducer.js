import * as types from './action-types';

const initialState = {
    serviceComments: [],
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.COMMENTS_FETCHED:
            return {
                ...state,
                serviceComments: action.comments
            };
        default:
            return state;
    }
}

export function getServiceComments(state) {
    return state.chat.serviceComments;
}
