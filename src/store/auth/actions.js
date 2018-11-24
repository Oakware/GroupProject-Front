import * as types from './action-types';
import * as selectors from './reducer';
import * as Auth from '../../microservices/auth';

export function initAuth() {
    return async (dispatch, getState) => {
        let res = await Auth.configureKeycloak();
        let { keycloak, authenticated } = res;

        dispatch({
            type: types.KEYCLOAK_INITIALIZED,
            keycloak,
            authenticated
        });

        if (authenticated) {
            let profile = await Auth.loadUserProfile();
            dispatch({
                type: types.USER_PROFILE_FETCHED,
                profile
            });
        }
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
