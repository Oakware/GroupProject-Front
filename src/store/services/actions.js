import * as types from './action-types';
import * as Services from '../../microservices/services';

export function getService(serviceId) {
    return async (dispatch, getState) => {
        let service = await Services.getService(serviceId);
        dispatch({ type: types.SERVICE_FETCHED, service });
    };
}

export function resetService() {
    return {
        type: types.SERVICE_RESET
    };
}

export function searchService(query) {
    return async (dispatch, getState) => {
        let services = await Services.serviceSearch(query);
        dispatch({ type: types.SEARCH_FETCHED, services });
    };
}

export function resetSearch() {
    return {
        type: types.SEARCH_RESET
    };
}
