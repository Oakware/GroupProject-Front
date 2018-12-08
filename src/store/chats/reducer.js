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
        case types.ALL_MESSAGES_FETCHED:
            return {
                ...state,
                fetchErrors: action.errors,
                all_messages: action.all_messages
            };
        case types.OWNER_FETCHED:
            return {
                ...state,
                fetchErrors: action.errors,
                owner: action.owner
            };
        default:
            return state;
    }
}

export const getFetchErrors = (state) => state.chat.fetchErrors;
export const getLastMessages = (state) => state.chat.messages;
export const getAllMessages = (state) => state.chat.all_messages;
