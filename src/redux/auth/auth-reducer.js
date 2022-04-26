import { authTypes } from "./auth-types";

initialState = {
  workerRegister: null,
  workerSubmitcode: "0000",
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SET_WORKER_REGISTER:
      return { ...state, workerRegister: action.payload };
    case authTypes.SET_WORKER_SUBMIT_CODE:
      return { ...state, workerSubmitcode: action.payload };
    default:
      return state;
  }
};
