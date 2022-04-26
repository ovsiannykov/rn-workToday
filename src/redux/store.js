import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./auth/auth-reducer";
import registerReducer from "./register/register-reducers";

let reducers = combineReducers({
  authReducer,
  registerReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;
