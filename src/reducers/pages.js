import {
  GET_PAGE_FAILURE,
  GET_PAGE_SUCCESS,
  GET_PAGE_REQUEST
} from "../actions";

export function pageReducer(
  state = { loading: true, success: false, error: false, users: {} },
  action
) {
  console.log("namrata", action);
  switch (action.type) {
    case GET_PAGE_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        success: false,
        error: false
      });
    case GET_PAGE_SUCCESS:
      console.log("namrata page...", action);
      const user = Object.assign({}, state, {
        loading: false,
        success: true,
        error: false,
        page: action.response
      });
      return user;
    case GET_PAGE_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        success: false,
        error: true,
        msg: action.error.data
      });
  }
  return state;
}
