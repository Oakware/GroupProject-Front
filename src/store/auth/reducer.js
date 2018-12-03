import * as types from './action-types';

const initialState = {
    keycloak: null,
    authenticated: false,
    keycloakProfile: null,
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
        case types.KEYCLOAK_PROFILE_FETCHED:
            return {
                ...state,
                keycloakProfile: action.profile
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
export const getUserId = (state) => state.auth.keycloak && state.auth.keycloak.subject;
export const getKeycloakProfile = (state) => state.auth.keycloakProfile;
export const getUserProfile = (state) => state.auth.userProfile;
