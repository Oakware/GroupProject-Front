import * as types from './action-types';
import * as Profiles from '../../microservices/profiles';

export function getProfile(id) {
    return async (dispatch, getState) => {
        let profile = await Profiles.getProfile(id);
        dispatch({ type: types.PROFILE_FETCHED, profile });
    };
}

export function resetProfile() {
    return {
        type: types.PROFILE_RESET
    };
}

export function searchProfile(query) {
    return async (dispatch, getState) => {
        let profiles = await Profiles.profileSearch(query);
        dispatch({ type: types.SEARCH_FETCHED, profiles });
    };
}

export function resetSearch() {
    return {
        type: types.SEARCH_RESET
    };
}
