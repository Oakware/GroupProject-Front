import * as gateway from './gateway';
import Keycloak from 'keycloak-js';

export function configureKeycloak() {
    return Keycloak({
        url: gateway.paths.auth,
        realm: 'shilo-na-milo',
        clientId: 'shilo'
    });
}
