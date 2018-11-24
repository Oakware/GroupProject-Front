import * as gateway from './gateway';
import Keycloak from 'keycloak-js';

const keycloak = Keycloak({
    url: gateway.paths.auth,
    realm: 'shilo-na-milo',
    clientId: 'shilo'
});

export function configureKeycloak() {
    return new Promise(resolve => {
        keycloak.init({ onLoad: 'check-sso', flow: 'implicit' })
            .success(a => resolve({ keycloak, authenticated: a }))
            .error(e => console.error('[Keycloak]', e.error, e.error_description))
    });
}

export function loadUserProfile() {
    return new Promise(resolve => {
        keycloak.loadUserProfile()
            .success(resolve)
            .error(() => console.error('[Keycloak] failed to load profile'))
    });
}
