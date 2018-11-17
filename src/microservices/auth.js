import * as gateway from './gateway';

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
