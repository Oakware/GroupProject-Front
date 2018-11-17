import * as types from './action-types';

const initialState = {
    serviceExist: true,
    service: undefined,
    servicesSearchErrors: {},
    servicesFound: [],
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
                servicesSearchErrors: action.errors,
                servicesFound: action.services
            };
        case types.SEARCH_RESET:
            return {
                ...state,
                servicesSearchErrors: {},
                servicesFound: []
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

export function getServicesSearchErrors(state) {
    return state.services.servicesSearchErrors;
}

export function getFoundServices(state) {
    return state.services.servicesFound;
}
