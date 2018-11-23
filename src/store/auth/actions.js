import * as types from './action-types';
import * as selectors from './reducer';
import * as Auth from '../../microservices/auth';

export function initAuth() {
    return async (dispatch, getState) => {
        let keycloak = Auth.configureKeycloak();
        keycloak.init({ onLoad: 'check-sso', flow: 'implicit' }).success(authenticated => {
            dispatch({
                type: types.KEYCLOAK_INITIALIZED,
                keycloak,
                authenticated
            });

            if (authenticated) {
                keycloak.loadUserProfile().success(profile => {
                    dispatch({
                        type: types.USER_PROFILE_FETCHED,
                        profile
                    });
                }).error(console.error);
            }
        }).error(e => {
            console.error('Keycloak: failed to initialize', e);
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
