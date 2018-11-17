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
    profiles: servicePath(get('/user_profile/profiles'), get => [{
        profile: (id) => get('/' + id),
        update: get('/update'),
        search: get('/search'),
    }]),
    services: servicePath(get('/services/sevices'), get => [{
        all: get('/all'),
        service: get('/id'),
        user: get('/user'),
        search: get('/intext'),
    }]),
    chat: servicePath(get('/chat_comment'), get => [{
        //
    }]),
};
