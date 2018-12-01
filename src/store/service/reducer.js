import * as types from './action-types';

const initialState = {
    fetchErrors: {},
    service: undefined,
    ownerProfile: undefined,
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
        case types.OWNER_FETCHED:
            return {
                ...state,
                ownerProfile: action.profile
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
export const getOwnerProfile = (state) => state.service.ownerProfile;
export const getComments = (state) => state.service.comments;
