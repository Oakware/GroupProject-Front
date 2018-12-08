import * as types from './action-types';
import * as Chat from '../../microservices/chat';
import * as Profiles from "../../microservices/profiles";

export function getLastMessages(serviceId) {
    return async (dispatch, getState) => {
        let messagesPromise = Chat.getLastMessages(serviceId);

        let res = await messagesPromise;
        let messages = res.messages;

        // load messages profiles
        let profiles = await Promise.all(messages.map(m => Profiles.getProfile(m.customerId)));
        messages.forEach((m, i) => m.customer = profiles[i].profile);
        dispatch({
            type: types.MESSAGES_FETCHED,
            messages: res.messages
        });
    };
}

export function getAllMessages(serviceId, customerId) {
    return async (dispatch, getState) => {
        let messagesPromise = Chat.getAllMessages(serviceId, customerId);

        let res = await messagesPromise;
        let all_messages = res.all_messages;

        // load messages profiles
        let profiles = await Promise.all(all_messages.map(m => Profiles.getProfile(m.customerId)));
        all_messages.forEach((m, i) => m.customer = profiles[i].profile);
        dispatch({
            type: types.ALL_MESSAGES_FETCHED,
            all_messages: res.all_messages
        });
    };
}