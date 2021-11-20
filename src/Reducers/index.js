import {combineReducers} from "redux"
import AuthReducers from "./AuthReducers"
import DetailReducers from "./DetailReducers"

export default combineReducers({
    auth:AuthReducers,
    detail:DetailReducers
})