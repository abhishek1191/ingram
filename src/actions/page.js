import { CALL_API } from "../middlewares/api";

export const GET_PAGE_REQUEST = "GET_PAGE_REQUEST";
export const GET_PAGE_SUCCESS = "GET_PAGE_SUCCESS";
export const GET_PAGE_FAILURE = "GET_PAGE_FAILURE";

function getUsers(url) {
  return {
    [CALL_API]: {
      types: [GET_PAGE_REQUEST, GET_PAGE_SUCCESS, GET_PAGE_FAILURE],
      url,
      method: "GET",
      headers: { "Content-Type": "text/html", Accept: "text/html" }
    }
  };
}

export function getPageAction() {
  return function(dispatch, getState) {
    return dispatch(getUsers("http://localhost:8000"));
  };
}
