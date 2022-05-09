import { combineReducers } from "redux";
import { articleReducer } from "./articleReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
    login: userReducer,
    article: articleReducer
});

export default reducers;

