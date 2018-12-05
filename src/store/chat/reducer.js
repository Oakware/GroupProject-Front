import * as types from './action-types';

const initialState = {
    fetchErrors: {},
    messages: [],
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.MESSAGES_FETCHED:
            return {
                ...state,
                fetchErrors: action.errors,
                messages: action.messages
            };
        default:
            return state;
    }
}

export const getFetchErrors = (state) => state.chat.fetchErrors;
export const getLastMessages = (state) => state.chat.messages;
