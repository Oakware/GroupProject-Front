export const GATEWAY_ENDPOINT = 'localhost:8762/microservices';

export function get(path) {
    return GATEWAY_ENDPOINT + path;
}
