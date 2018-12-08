import axios from 'axios';
import * as gateway from './gateway';

export async function getServiceComments(serviceId) {
    let res = await axios.get(gateway.paths.chat.serviceComments(serviceId));
    let comments = res.data || [];
    return {comments};
}

export async function addServiceComment(comment) {
    await axios.post(gateway.paths.chat.addServiceComment, comment, {
        headers: {Authorization: 'bearer '}
    });
    return {success: true};
}

export async function getServiceChats(serviceId) {
    let res = await axios.get(gateway.paths.chat.serviceChats(serviceId), {
        headers: {Authorization: 'bearer '}
    });
    let messages = res.data || [];
    return {messages};
}

export async function getUserServiceMessages(serviceId, customerId) {
    let res = await axios.get(gateway.paths.chat.userServiceMessages(serviceId, customerId), {
        headers: {Authorization: 'bearer '}
    });
    let messages = res.data || [];
    return {messages};
}

export async function sendMessage(message) {
    await axios.post(gateway.paths.chat.sendMessage, message, {
        headers: {Authorization: 'bearer '}
    });
    return {success: true};
}
