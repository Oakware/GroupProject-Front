import * as types from './action-types';
import * as selectors from './reducer';
import * as Services from '../../microservices/services';

export function addService(service) {
    return async (dispatch, getState) => {
        let res = await Services.addService(service);

        dispatch({
            type: types.SERVICE_ADDED,
            errors: res.errors,
            service: res.service
        });
    };
}
