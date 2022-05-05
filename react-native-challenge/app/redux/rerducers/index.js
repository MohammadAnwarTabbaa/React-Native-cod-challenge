import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
const reducers = combineReducers({
    test: userReducer
});

export default reducers;