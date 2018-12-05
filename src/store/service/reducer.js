import * as types from './action-types';

const initialState = {
    fetchErrors: {},
    service: null,
    ownerProfile: null,
    comments: [],
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
        case types.APPEND_COMMENT:
            return {
                ...state,
                comments: state.comments.concat([action.comment])
            };
        default:
            return state;
    }
}

export const getFetchErrors = (state) => state.service.fetchErrors;
export const getService = (state) => state.service.service;
export const getOwnerProfile = (state) => state.service.ownerProfile;
export const getComments = (state) => state.service.comments;
