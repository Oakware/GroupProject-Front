import * as types from './action-types';

const initialState = {
    keycloak: null,
    authenticated: false,
    userProfile: null,
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.KEYCLOAK_INITIALIZED:
            return {
                ...state,
                keycloak: action.keycloak,
                authenticated: action.authenticated
            };
        case types.USER_PROFILE_FETCHED:
            return {
                ...state,
                userProfile: action.profile
            };
        default:
            return state;
    }
}

export const getKeycloak = (state) => state.auth.keycloak;
export const getToken = (state) => state.auth.keycloak.token;

export const isAuthenticated = (state) => state.auth.authenticated;
export const getUserProfile = (state) => state.auth.userProfile;
