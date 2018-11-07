import * as types from './action-types';

const initialState = {
    servicesFound: []
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SEARCH_FETCHED:
            return {
                ...state,
                servicesFound: action.services
            };
        default:
            return state;
    }
}

