import * as types from './action-types';
import * as Chat from '../../microservices/chat';

export function getServiceComments(serviceId) {
    return async (dispatch, getState) => {
        let comments = await Chat.getServiceComments(serviceId);
        dispatch({ type: types.COMMENTS_FETCHED, comments });
    };
}
