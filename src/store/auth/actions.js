import * as types from './action-types';
import * as selectors from './reducer';
import * as Auth from '../../microservices/auth';
import * as Profiles from '../../microservices/profiles';

export function initAuth() {
    return async (dispatch, getState) => {
        let res = await Auth.configureKeycloak();
        let { keycloak, authenticated } = res;

        dispatch({
            type: types.KEYCLOAK_INITIALIZED,
            keycloak,
            authenticated
        });

        if (!authenticated) return;

        let profile = await Auth.loadUserProfile();
        dispatch({
            type: types.KEYCLOAK_PROFILE_FETCHED,
            profile
        });

        res = await Profiles.getProfile(selectors.getUserId(getState()));
        if (res.profile == null) {
            res = await Profiles.createProfile(selectors.getUserId(getState()), profile);
        }

        dispatch({
            type: types.USER_PROFILE_FETCHED,
            profile: res.profile
        });
    };
}

export function register() {
    return (dispatch, getState) => {
        selectors.getKeycloak(getState()).register();
    };
}

export function login() {
    return (dispatch, getState) => {
        selectors.getKeycloak(getState()).login();
    };
}

export function logout() {
    return (dispatch, getState) => {
        selectors.getKeycloak(getState()).logout();
    };
}

export function updateProfile(data) {
    return async (dispatch, getState) => {
        let res = await Profiles.updateProfile(data);
        dispatch({
            type: types.USER_PROFILE_UPDATED,
            errors: res.errors,
            profile: res.profile
        });
    };
}
