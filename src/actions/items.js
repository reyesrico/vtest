import { fetchExperimentsApiCall } from '../services/experiment';

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData() {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetchExperimentsApiCall()
            .then((response) => {
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((items) => {
                dispatch(itemsFetchDataSuccess(items))
            })
            .catch((err) => {
                console.log(err);
                dispatch(itemsHasErrored(true))
            });
    };
}