import {combineReducers} from "redux"
import userListReducer from "./userListReducer"
import saveUserReducer from "./saveUserReducer"
import authReducer from "./authReducer"
import authorizationListReducer from "./authorizationListReducer"


const rootReducer = combineReducers({
    userListReducer,
    saveUserReducer,
    authReducer,
    authorizationListReducer
})

export default rootReducer;