import { combineReducers } from "redux";
import { usersReducer } from "./users";
import { pageReducer } from "./pages";
const rootReducer = combineReducers({
  users: usersReducer,
  pages: pageReducer
});

export default rootReducer;
