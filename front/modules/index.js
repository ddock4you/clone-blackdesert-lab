import { combineReducers } from "redux";
import user from "./user";

const rootModules = combineReducers({
    user,
});

export default rootModules;
