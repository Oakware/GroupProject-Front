import * as types from './action-types';
import * as Services from '../../microservices/services';
import * as Profiles from '../../microservices/profiles';

export function searchService(query) {
    return async (dispatch, getState) => {
        let res = await Services.serviceSearch(query);
        dispatch({
            type: types.SERVICE_SEARCH_FETCHED,
            errors: res.errors,
            services: res.services
        });
    };
}

export function resetServicesSearch() {
    return {
        type: types.SERVICE_SEARCH_RESET
    };
}

export function searchProfile(query) {
    return async (dispatch, getState) => {
        let res = await Profiles.profileSearch(query);
        dispatch({
            type: types.PROFILE_SEARCH_FETCHED,
            errors: res.errors,
            profiles: res.profiles
        });
    };
}

export function resetProfilesSearch() {
    return {
        type: types.PROFILE_SEARCH_RESET
    };
}
