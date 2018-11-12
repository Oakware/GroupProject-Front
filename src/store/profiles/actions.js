import * as types from './action-types';
import * as ProfileService from '../../microservices/profiles';

export function fetchProfile(id) {
    return async (dispatch, getState) => {
        let profile = await ProfileService.getProfile(id);
        dispatch({ type: types.PROFILE_FETCHED, profile });
    };
}
