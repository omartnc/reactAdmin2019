import {combineReducers} from "redux"
import userListReducer from "./userListReducer"
import saveUserReducer from "./saveUserReducer"
import authReducer from "./authReducer"
import authorizationListReducer from "./authorizationListReducer"
import savedAuthorizationReducer from "./savedAuthorizationReducer"
import authorizationItemListReducer from "./authorizationItemListReducer"
import savedAuthorizationItemsReducer from "./savedAuthorizationItemsReducer"


const rootReducer = combineReducers({
    userListReducer,
    saveUserReducer,
    authReducer,
    authorizationListReducer,
    savedAuthorizationReducer,
    authorizationItemListReducer,
    savedAuthorizationItemsReducer
})

export default rootReducer;