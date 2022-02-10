import { combineReducers } from "redux";
import { authReducer, bookReducer } from "../reducer";

const rootReducer = combineReducers({
    user : authReducer,
    book : bookReducer
})

export default rootReducer;