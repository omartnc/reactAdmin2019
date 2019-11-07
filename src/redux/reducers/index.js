import {combineReducers} from "redux"
import userListReducer from "./userListReducer"
import saveUserReducer from "./saveUserReducer"
import authReducer from "./authReducer"



const rootReducer = combineReducers({
    userListReducer,
    saveUserReducer,
    authReducer,
})

export default rootReducer;