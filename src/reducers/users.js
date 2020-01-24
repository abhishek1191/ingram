import {
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST
} from "../actions";

export function usersReducer(
  state = { loading: true, success: false, error: false, users: {} },
  action
) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        success: false,
        error: false
      });
    case GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        success: true,
        error: false,
        users: action.response.data
      });
    case GET_USERS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        success: false,
        error: true,
        msg: action.error.data
      });
  }
  return state;
}
