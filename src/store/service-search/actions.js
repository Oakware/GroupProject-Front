import * as types from './action-types';
import * as Services from '../../services/services';

export function searchService(query) {
    return async (dispatch, getState) => {
        let res = await Services.serviceSearch(query);
        dispatch( { type: types.SEARCH_FETCHED, services: res } );
    };
}
