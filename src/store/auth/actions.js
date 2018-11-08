import * as types from './action-types';
import * as AuthService from '../../microservices/auth';

export function fetchToken() {
    return async (dispatch, getState) => {
        try {
            let token = await AuthService.login();
            dispatch({
                type: types.TOKEN_FETCHED,
                authToken: token.authToken
            });
        } catch (error) {
            console.error(error);
        }
    };
}
