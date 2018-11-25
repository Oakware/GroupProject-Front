import * as types from './action-types';

const initialState = {
    fetchErrors: {},
    profile: undefined,
    userServices: [],
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.PROFILE_FETCHED:
            return {
                ...state,
                fetchErrors: action.errors,
                profile: action.profile
            };
        case types.PROFILE_UPDATED:
            if (getProfile(state).id === action.profile.id) {
                return {
                    ...state,
                    profile: action.profile
                };
            }
            return state;
        case types.USER_SERVICES_FETCHED:
            return {
                ...state,
                userServices: action.services
            };
        default:
            return state;
    }
}

export const getFetchErrors = (state) => state.profile.fetchErrors;
export const getProfile = (state) => state.profile.profile;
export const getUserServices = (state) => state.profile.userServices;
