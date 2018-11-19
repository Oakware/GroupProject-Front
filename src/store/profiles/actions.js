import * as types from './action-types';
import * as authSelectors from '../auth/reducer';
import * as Profiles from '../../microservices/profiles';

export function getProfile(id) {
    return async (dispatch, getState) => {
        let res = await Profiles.getProfile(id);
        dispatch({
            type: types.PROFILE_FETCHED,
            errors: res.errors,
            profile: res.profile
        });
    };
}

export function updateProfile(data) {
    return async (dispatch, getState) => {
        let userId = authSelectors.getUserId(getState());
        let res = Profiles.updateProfile(userId, data);
        dispatch({
            type: types.PROFILE_UPDATED,
            errors: res.errors,
            profile: res.profile
        });
    };
}

export function resetProfile() {
    return {
        type: types.PROFILE_RESET
    };
}

export function searchProfile(query) {
    return async (dispatch, getState) => {
        let res = await Profiles.profileSearch(query);
        dispatch({
            type: types.SEARCH_FETCHED,
            errors: res.errors,
            profiles: res.profiles
        });
    };
}

export function resetSearch() {
    return {
        type: types.SEARCH_RESET
    };
}
