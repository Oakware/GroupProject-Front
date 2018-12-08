import axios from 'axios';
import * as gateway from './gateway';

export async function getService(serviceId) {
    let res = await axios.get(gateway.paths.services.service, {
        params: {id: serviceId}
    });

    let service = res.data.result;

    if (!service) {
        return {
            errors: {
                code: 404,
                message: 'service not found'
            }
        };
    }

    return {service};
}

export async function getUserServices(userId) {
    let res = await axios.get(gateway.paths.services.user, {
        params: {
            user: userId
        }
    });

    return { services: res.data.result }
}

export async function serviceSearch(query) {
    let res = await axios.get(gateway.paths.services.search, {
        params: query
    });

    let services = res.data.result.result;
    return {
        errors: {
            message: services.length ? undefined : 'nothing found'
        },
        services
    };
}

export async function addService(data) {
    let res = await axios.post(gateway.paths.services.addService, data);

    let service = res.data;
    return {service};
}
