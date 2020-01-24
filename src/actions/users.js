import { CALL_API } from '../middlewares/api';

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

function getUsers(url) {
    return {
        [CALL_API]: {
            types: [GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE],
            url,
            method: 'GET',
        },
    };
}

export function getUsersAction() {
    return function (dispatch, getState) {
        return dispatch(getUsers('https://jsonplaceholder.typicode.com/users'));
    };
}