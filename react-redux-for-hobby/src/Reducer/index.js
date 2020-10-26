import hobbyReducer from "./Hobby";
import userReducer from "./User";
import {combineReducers} from "redux";
const rootReducer = combineReducers({
    hobby:hobbyReducer,
    user:userReducer
});

export default rootReducer;