import * as types from './action-types';

const initialState = {
    fetchErrors: {},
    service: undefined,
    comments: [],
    usersOrdered: [],
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SERVICE_FETCHED:
            return {
                ...state,
                fetchErrors: action.errors,
                service: action.service
            };
        case types.COMMENTS_FETCHED:
            return {
                ...state,
                comments: action.comments
            };
        case types.USERS_ORDERED_FETCHED:
            return {
                ...state,
                usersOrdered: action.users
            };
        default:
            return state;
    }
}

export const getFetchErrors = (state) => state.service.fetchErrors;
export const getService = (state) => state.service.service;
export const getComments = (state) => state.service.comments;
