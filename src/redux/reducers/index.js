import {combineReducers} from "redux"
import loadginReducer from "./loadginReducer"
import userListReducer from "./userListReducer"
import saveUserReducer from "./saveUserReducer"
import authReducer from "./authReducer"



const rootReducer = combineReducers({
    loadginReducer,
    userListReducer,
    saveUserReducer,
    authReducer,
})

export default rootReducer;