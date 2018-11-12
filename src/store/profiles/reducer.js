import * as types from './action-types';

const initialState = {
    profileExist: true,
    profile: undefined
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
