import * as types from './action-types';
import * as AuthService from '../../microservices/auth';

export function fetchToken() {
    return async (dispatch, getState) => {
        try {
            let res = await AuthService.login();
            dispatch({
                type: types.TOKEN_FETCHED,
                token: res.token
            });
        } catch (error) {
            console.error(error);
        }
    };
}
