export const GATEWAY_ENDPOINT = 'http://localhost:8762/api';

export function get(path) {
    return GATEWAY_ENDPOINT + path;
}

function servicePath(rootPath, pathsGen) {
    let entry = (path = '') => rootPath + path;
    let paths = pathsGen(entry);
    Object.assign(entry, paths);
    return entry;
}

export const paths = {
    auth: 'http://35.186.198.0/auth',
    profiles: servicePath('http://35.244.240.101/profiles', get => ({
        profile: get('/get'),
        update: get('/update'),
        search: get('/search'),
    })),
    services: servicePath('http://35.244.186.40/services', get => ({
        all: get('/all'),
        service: get('/id'),
        user: get('/user'),
        search: get('/filter'),
        addService: get('/add_service'),
    })),
    chat: servicePath('http://35.186.216.149', get => ({
        serviceComments: id => get(`/comments/aquire/service/${id}`),
        addServiceComment: get('/comments/save'),
        serviceChats: id => get(`/dialog/aquire/service/${id}`),
        userServiceMessages: (sid, cid) => get(`/dialog/aquire/service/${sid}/customer/${cid}`),
        sendMessage: get('/dialog/save'),
    })),
};
