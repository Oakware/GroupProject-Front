import * as types from './action-types';
import * as Chat from '../../microservices/chat';
import * as Profiles from '../../microservices/profiles';
import * as Services from '../../microservices/services';
import * as authSelectors from '../auth/reducer';
import * as chatsSelectors from './reducer';

function loadService(serviceId) {
    return async (dispatch, getState) => {
        let curService = chatsSelectors.getService(getState());

        if (curService && curService.id === serviceId)
            return;

        // load service
        let res = await Services.getService(serviceId);
        let service = res.service;
        dispatch({
            type: types.SERVICE_FETCHED,
            service: res.service
        });

        if (service == null)
            return;

        // load profile
        if (service != null) {
            res = await Profiles.getProfile(service.user_id);
            dispatch({
                type: types.SERVICE_OWNER_FETCHED,
                profile: res.profile
            });
        }
    };
}

export function getChats(serviceId) {
    return async (dispatch, getState) => {
        dispatch(loadService(serviceId));
        let messagesPromise = Chat.getServiceChats(serviceId);

        // load chats
        let res = await messagesPromise;
        let chats = res.messages;

        // load chats profiles
        let profiles = await Promise.all(chats.map(m => Profiles.getProfile(m.customerId)));
        chats.forEach((m, i) => m.customer = profiles[i].profile);
        dispatch({
            type: types.CHATS_FETCHED,
            chats: res.messages
        });
    };
}

export function getUserMessages(serviceId, customerId) {
    return async (dispatch, getState) => {
        dispatch(loadService(serviceId));

        // load messages
        let res = await Chat.getUserServiceMessages(serviceId, customerId);;
        let messages = res.messages;

        // load messages profiles
        let profiles = await Promise.all(messages.map(m => Profiles.getProfile(m.customerId)));
        messages.forEach((m, i) => m.customer = profiles[i].profile);
        dispatch({
            type: types.USER_MESSAGES_FETCHED,
            messages: res.messages
        });
    };
}

export function sendMessage(message) {
    return async (dispatch, getState) => {
        let state = getState();

        let res = await Chat.sendMessage(message);
        // message.customer = message.from;

        if (res.success) {
            dispatch({
                type: types.APPEND_MESSAGE,
                message
            });
        }
    };
}
