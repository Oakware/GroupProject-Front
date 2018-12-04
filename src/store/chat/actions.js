import * as types from './action-types';
import * as Chat from '../../microservices/chat';

export function getLastMessages(serviceId) {
    return async (dispatch, getState) => {
        let messagesPromise = Chat.getLastMessages(serviceId);

        let res = await messagesPromise;
        console.log(res);
        dispatch({
            type: types.MESSAGES_FETCHED,
            messages: res.messages
        });
    };
}