import * as types from './action-types';

const initialState = {
    serviceExist: true,
    service: undefined,
    servicesFound: undefined,
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SERVICE_FETCHED:
            let service = action.service;
            return {
                ...state,
                serviceExist: service != null,
                service: service
            };
        case types.SERVICE_RESET:
            return {
                ...state,
                serviceExist: true,
                service: undefined
            };
        case types.SEARCH_FETCHED:
            return {
                ...state,
                servicesFound: action.services
            };
        case types.SEARCH_RESET:
            return {
                ...state,
                servicesFound: undefined
            };
        default:
            return state;
    }
}

export function isServiceExist(state) {
    return state.services.serviceExist;
}

export function getService(state) {
    return state.services.service;
}

export function getFoundServices(state) {
    return state.services.servicesFound;
}
