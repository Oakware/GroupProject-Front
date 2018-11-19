import * as gateway from './gateway';
import Keycloak from 'keycloak-js';

// let keycloak = Keycloak({
//     url: 'http://localhost:8080/auth',
//     realm: 'demo',
//     clientId: 'shilo'
// });
//
// keycloak.init({ flow: 'implicit' }).success(function (authenticated) {
//     console.log(authenticated ? keycloak : 'not authenticated');
//     if (!authenticated) {
//         keycloak.login();
//     }
//     keycloak.loadUserProfile().success(result => {
//         console.log(result);
//     });
//     // else
//         // keycloak.updateToken(30).success(result => console.log(keycloak));
// }).error(function () {
//     console.log('failed to initialize');
//     // keycloak.logout();
// });

function generateToken() {
    return {
        userId: 1,
        key: Math.trunc(Math.random() * 1000)
    };
}

export function loadToken() {
    try {
        return JSON.parse(localStorage['auth:token']);
    } catch (e) {
        return null;
    }
}

export function saveToken(token) {
    localStorage['auth:token'] = JSON.stringify(token);
}

export async function register(query) {
    return {
        errors: {},
        token: generateToken()
    }
}

export async function login(query) {
    // let res = await axios.get(gateway.get('/auth'), {
    //     headers: { authorization: localStorage.getItem('token') }
    // });

    let token = generateToken();
    saveToken(token);

    return {
        errors: {},
        token
    }
}
