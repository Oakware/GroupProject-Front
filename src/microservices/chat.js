import axios from 'axios';
import * as gateway from './gateway';

const comments = [
    {
        "id": 1,
        "serviceId": 1,
        "customerId": 1,
        "time": "2018-11-17T21:34:53",
        "rating": 5,
        "commentBody": "This individual does her job perfectly)0))00"
    }, {
        "id": 2,
        "serviceId": 1,
        "customerId": 2,
        "time": "2018-11-16T11:00:53",
        "rating": 1,
        "commentBody": "Awful."
    }
];

export async function getServiceComments(serviceId) {
    let res = await axios.get(gateway.paths.chat.serviceComments(serviceId));
    let comments = res.data || [];
    return { comments };
}

export async function addServiceComment(comment) {
    await axios.post(gateway.paths.chat.addServiceComment, comment);
    return {success: true};
}
