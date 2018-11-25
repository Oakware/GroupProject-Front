import * as types from './action-types';
import * as Profiles from '../../microservices/profiles';
import * as Services from '../../microservices/services';

export function getProfile(id) {
    return async (dispatch, getState) => {
        let profilePromise = Profiles.getProfile(id);
        let servicesPromise = Services.getUserServices(id);

        let res = await profilePromise;
        dispatch({
            type: types.PROFILE_FETCHED,
            errors: res.errors,
            profile: res.profile
        });

        res = await servicesPromise;
        dispatch({
            type: types.USER_SERVICES_FETCHED,
            services: res.services
        });
    };
}

export function updateProfile(data) {
    return async (dispatch, getState) => {
        let userId = '1';
        let res = Profiles.updateProfile(userId, data);
        dispatch({
            type: types.PROFILE_UPDATED,
            errors: res.errors,
            profile: res.profile
        });
    };
}
