import {combineReducers} from "redux"
import loginReducer from "./loginReducer"
import userListReducer from "./userListReducer"
import saveUserReducer from "./saveUserReducer"
import authReducer from "./authReducer"



const rootReducer = combineReducers({
    loginReducer,
    userListReducer,
    saveUserReducer,
    authReducer,
})

export default rootReducer;