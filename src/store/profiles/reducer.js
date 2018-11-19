import * as types from './action-types';

const initialState = {
    profileFetchErrors: {},
    profile: undefined,
    profileSearchErrors: {},
    profilesFound: [],
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.PROFILE_FETCHED:
            return {
                ...state,
                profileFetchErrors: action.errors,
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
        case types.PROFILE_RESET:
            return {
                ...state,
                profileFetchErrors: {},
                profile: undefined,
            };
        case types.SEARCH_FETCHED:
            return {
                ...state,
                profilesFound: action.profiles
            };
        case types.SEARCH_RESET:
            return {
                ...state,
                profilesFound: undefined
            };
        default:
            return state;
    }
}

export function getProfileFetchErrors(state) {
    return state.profiles.profileFetchErrors;
}

export function getProfile(state) {
    return state.profiles.profile;
}

export function getProfileSearchErrors(state) {
    return state.profiles.profileSearchErrors;
}

export function getFoundProfiles(state) {
    return state.profiles.profilesFound;
}
