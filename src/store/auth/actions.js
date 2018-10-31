import * as types from './action-types';
import * as AuthService from '../../services/auth';

function setToken(token) {
    localStorage['auth:token'] = JSON.stringify(token);
}

export function fetchToken() {
    return async (dispatch, getState) => {
        try {
            let token = await AuthService.login();
            setToken(token);

            // dispatch({ type: types.TOKEN_FETCHED, token });
            setTimeout(() => dispatch({ type: types.TOKEN_FETCHED, token }), 1000);
        } catch (error) {
            console.error(error);
        }
    };
}
