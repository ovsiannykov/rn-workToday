import {applyMiddleware, combineReducers, createStore} from "redux";

import thunk from "redux-thunk";
import {authReducer} from "./auth/auth-reducer";


let reducers = combineReducers({
  authReducer
})


let store = createStore(reducers, applyMiddleware(thunk))
export default store
