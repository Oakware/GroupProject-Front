import * as gateway from './gateway';
import Keycloak from 'keycloak-js';

let keycloak = Keycloak({
    url: gateway.paths.auth,
    realm: 'demo',
    clientId: 'shilo'
});

keycloak.init({ flow: 'implicit' }).success(function (authenticated) {
    console.log(keycloak);
    console.log(authenticated ? 'authenticated' : 'not authenticated');
    if (authenticated) {
        keycloak.loadUserProfile()
            .success(console.log)
            .error(console.error);
    } else if (isAuthenticated()) {
        keycloak.login();
    }
}).error(function () {
    console.error('Keycloak: failed to initialize');
});

export function register() {
    keycloak.register();
}

export function login() {
    keycloak.login();
}

export function logout() {
    keycloak.logout();
}

export function isAuthenticated() {
    return keycloak.subject != null;
}

export function getUserId() {
    return keycloak.subject;
}
