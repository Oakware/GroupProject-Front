import * as types from './action-types';

const initialState = {
    profile: {}
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.PROFILE_FETCHED:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
}
