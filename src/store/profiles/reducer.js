import * as types from './action-types';

const initialState = {
    profileExist: true,
    profile: undefined,
    profilesFound: undefined,
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.PROFILE_FETCHED:
            let profile = action.profile;
            return {
                ...state,
                profileExist: profile != null,
                profile: profile
            };
        case types.PROFILE_RESET:
            return {
                ...state,
                profileExist: true,
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

export function isProfileExist(state) {
    return state.profiles.profileExist;
}

export function getProfile(state) {
    return state.profiles.profile;
}

export function getFoundProfiles(state) {
    return state.profiles.profilesFound;
}
