function generateToken() {
    return {
        id: Math.trunc(Math.random() * 1000)
    };
}

export async function registerUser(params) {
    return {
        authToken: generateToken(),
        errors: {}
    }
}

export async function login() {
    return {
        authToken: generateToken(),
        errors: {}
    }
}
