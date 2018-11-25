import * as types from './action-types';
import * as Services from '../../microservices/services';
import * as Chat from '../../microservices/chat';

export function getService(serviceId) {
    return async (dispatch, getState) => {
        let servicePromise = Services.getService(serviceId);
        let commentsPromise = Chat.getServiceComments(serviceId);

        let res = await servicePromise;
        dispatch({
            type: types.SERVICE_FETCHED,
            errors: res.errors,
            service: res.service
        });

        res = await commentsPromise;
        dispatch({
            type: types.COMMENTS_FETCHED,
            comments: res.comments
        });
    };
}
