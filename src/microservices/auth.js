import * as gateway from './gateway';

function generateToken() {
    return {
        userId: 1,
        key: Math.trunc(Math.random() * 1000)
    };
}

export async function registerUser(query) {
    return {
        token: generateToken(),
        errors: {}
    }
}

export async function login(query) {
    // let res = await axios.get(gateway.get('/auth'), {
    //     headers: { authorization: localStorage.getItem('token') }
    // });

    return {
        token: generateToken(),
        errors: {}
    }
}
