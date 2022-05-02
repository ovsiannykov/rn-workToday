import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./auth/auth-reducer";
import { workerReducer } from "./worker/worker-reducer";
import { employerReducer } from "./employer/employer-reducer";

let reducers = combineReducers({
  authReducer,
  workerReducer,
  employerReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;
