import * as types from './action-types';
import * as Services from '../../microservices/services';
import * as Profiles from '../../microservices/profiles';
import * as Chat from '../../microservices/chat';
import * as authSelectors from '../auth/reducer';
import * as serviceSelectors from './reducer';

export function getService(serviceId) {
    return async (dispatch, getState) => {
        let servicePromise = Services.getService(serviceId);
        let commentsPromise = Chat.getServiceComments(serviceId);

        let res = await servicePromise;
        let service = res.service;
        dispatch({
            type: types.SERVICE_FETCHED,
            errors: res.errors,
            service: res.service
        });

        if (service == null)
            return;

        let ownerPromise = Profiles.getProfile(service.user_id);

        res = await commentsPromise;
        dispatch({
            type: types.COMMENTS_FETCHED,
            comments: res.comments
        });

        res = await ownerPromise;
        dispatch({
            type: types.OWNER_FETCHED,
            profile: res.profile
        });
    };
}

export function addComment(commentBody) {
    return async (dispatch, getState) => {
        let state = getState();
        let comment = {
            serviceId: serviceSelectors.getService(state).id,
            customerId: authSelectors.getUserId(state),
            commentBody,
            rating: 4
        };

        let res = await Chat.addServiceComment(comment);
        if (res.success) {
            dispatch({
                type: types.APPEND_COMMENT,
                comment
            });
        }
    };
}
