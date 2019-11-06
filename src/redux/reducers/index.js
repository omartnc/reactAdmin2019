import {combineReducers} from "redux"
import userListReducer from "./userListReducer"
import saveUserReducer from "./saveUserReducer"



const rootReducer = combineReducers({
    userListReducer,
    saveUserReducer
})

export default rootReducer;