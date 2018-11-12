export const GATEWAY_ENDPOINT = 'http://localhost:8762/api';

export function get(path) {
    return GATEWAY_ENDPOINT + path;
}

function genServicePath(rootPath, paths) {
    let entry = (path = '') => rootPath + path;
    Object.assign(entry, paths);
    return entry;
}

export const paths = {
    profiles: genServicePath(get('/user_profile'), {
        profile: (id) => get('/user_profile/profiles/' + id),
        update: get('/user_profile/profiles/update'),
    }),
    services: genServicePath(get('/services'), {
        all: get('/sevices/sevices/all'),
        intext: get('/sevices/sevices/intext'),
    }),
    chat: genServicePath(get('/chat_comment'), {
        //
    }),
};
