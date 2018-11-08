import * as types from './action-types';
import * as ProfileService from '../../microservices/profile';

export function fetchProfile(id) {
    return async (dispatch, getState) => {
        try {
            let profile = await ProfileService.getProfile(id);
            dispatch({ type: types.PROFILE_FETCHED, profile });
        } catch (error) {
            console.error(error);
        }
    };
}
