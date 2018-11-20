import * as types from './action-types';
import * as Auth from '../../microservices/auth';

const initialState = {};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        default:
            return state;
    }
}
