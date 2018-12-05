import * as types from './action-types';

const initialState = {};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.SERVICE_ADDED:
        default:
            return state;
    }
}
