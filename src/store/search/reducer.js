import * as types from './action-types';

const initialState = {
    servicesSearchErrors: {},
    servicesFound: [],
    profilesSearchErrors: {},
    profilesFound: [],
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SERVICE_SEARCH_FETCHED:
            return {
                ...state,
                servicesSearchErrors: action.errors,
                servicesFound: action.services
            };
        case types.SERVICE_SEARCH_RESET:
            return {
                ...state,
                servicesSearchErrors: {},
                servicesFound: []
            };
        case types.PROFILE_SEARCH_FETCHED:
            return {
                ...state,
                profileSearchErrors: action.errors,
                profilesFound: action.profiles
            };
        case types.PROFILE_SEARCH_RESET:
            return {
                ...state,
                profileSearchErrors: {},
                profilesFound: []
            };
        default:
            return state;
    }
}

export const getServicesSearchErrors = (state) => state.search.servicesSearchErrors;
export const getFoundServices = (state) => state.search.servicesFound;

export const getProfilesSearchErrors = (state) => state.search.profilesSearchErrors;
export const getFoundProfiles = (state) => state.search.profilesFound;
