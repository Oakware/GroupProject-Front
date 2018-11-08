import * as types from './action-types';
import * as Services from '../../microservices/services';

export function getService(serviceId) {
    return async (dispatch, getState) => {
        let service = await Services.getService(serviceId);
        setTimeout(() => dispatch({ type: types.SERVICE_FETCHED, service }), 500);
    };
}

export function closeService() {
    return {
        type: types.SERVICE_CLOSE
    };
}

export function searchService(query) {
    return async (dispatch, getState) => {
        let services = await Services.serviceSearch(query);
        dispatch({ type: types.SEARCH_FETCHED, services });
    };
}
