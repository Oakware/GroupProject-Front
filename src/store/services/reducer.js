import * as types from './action-types';

const initialState = {
    serviceFetchErrors: {},
    service: undefined,
    userServices: [],
    servicesSearchErrors: {},
    servicesFound: [],
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SERVICE_FETCHED:
            return {
                ...state,
                serviceFetchErrors: action.errors,
                service: action.service
            };
        case types.SERVICE_RESET:
            return {
                ...state,
                serviceFetchErrors: {},
                service: undefined
            };
        case types.USER_SERVICES_FETCHED:
            return {
                ...state,
                userServices: action.services
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

export function getServiceFetchErrors(state) {
    return state.services.serviceFetchErrors;
}

export function getService(state) {
    return state.services.service;
}

export function getUserServices(state) {
    return state.services.userServices;
}

export function getServicesSearchErrors(state) {
    return state.services.servicesSearchErrors;
}

export function getFoundServices(state) {
    return state.services.servicesFound;
}
