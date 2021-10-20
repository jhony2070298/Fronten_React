import { combineReducers } from "redux";
import autenticationReducer from './autenticationReducer'

export default combineReducers({
    auth: autenticationReducer
})