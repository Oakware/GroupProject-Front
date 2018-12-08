import * as types from './action-types';

const initialState = {
    chats: [],
    userMessages: [],
    service: null,
    serviceOwner: null,
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.CHATS_FETCHED:
            return {
                ...state,
                chats: action.chats
            };
        case types.USER_MESSAGES_FETCHED:
            return {
                ...state,
                userMessages: action.messages
            };
        case types.SERVICE_FETCHED:
            return {
                ...state,
                service: action.service
            };
        case types.SERVICE_OWNER_FETCHED:
            return {
                ...state,
                serviceOwner: action.profile
            };
        case types.APPEND_MESSAGE:
            return {
                ...state,
                userMessages: [...state.userMessages, action.message]
            };
        default:
            return state;
    }
}

export const getChats = (state) => state.chats.chats;
export const getUserMessages = (state) => state.chats.userMessages;
export const getService = (state) => state.chats.service;
export const getServiceOwner = (state) => state.chats.serviceOwner;
