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

        let service, comments;

        // load service
        let res = await servicePromise;
        service = res.service;
        dispatch({
            type: types.SERVICE_FETCHED,
            errors: res.errors,
            service: res.service
        });

        // if 404
        if (service == null)
            return;

        // load owner
        res = await Profiles.getProfile(service.user_id);
        dispatch({
            type: types.OWNER_FETCHED,
            profile: res.profile
        });

        // load comments
        res = await commentsPromise;
        comments = res.comments;

        // load comments profiles
        let profiles = await Promise.all(comments.map(c => Profiles.getProfile(c.customerId)));
        comments.forEach((c, i) => c.user = profiles[i].profile);
        dispatch({
            type: types.COMMENTS_FETCHED,
            comments: res.comments
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

        // post comment
        let res = await Chat.addServiceComment(comment);
        comment.user = authSelectors.getUserProfile(state);

        if (res.success) {
            dispatch({
                type: types.APPEND_COMMENT,
                comment
            });
        }
    };
}
