export const GATEWAY_ENDPOINT = 'http://localhost:8762/api';

export function get(path) {
    return GATEWAY_ENDPOINT + path;
}

function servicePath(rootPath, pathsGen) {
    let entry = (path = '') => rootPath + path;
    let paths = pathsGen(entry)[0];
    Object.assign(entry, paths);
    return entry;
}

export const paths = {
    auth: 'http://localhost:8080/auth',
    profiles: servicePath('http://35.244.240.101/profiles', get => [{
        profile: (id) => get('/' + id),
        update: get('/update'),
        search: get('/search'),
    }]),
    services: servicePath('http://35.244.186.40/services', get => [{
        all: get('/all'),
        service: get('/id'),
        user: get('/user'),
        search: get('/intext'),
    }]),
    chat: servicePath(get('http://35.244.172.73'), get => [{
        //
    }]),
};
