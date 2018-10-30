import * as types from './action-types';
import { AuthService } from '../../services/auth';

export function fetchToken() {
    return async (dispatch, getState) => {
        try {
            let token = await AuthService.login();
            localStorage['auth:token'] = token;
            dispatch({ type: types.TOKEN_FETCHED, token });
        } catch (error) {
            console.error(error);
        }
    };
}
