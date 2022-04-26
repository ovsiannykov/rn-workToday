import { registerActionsTypes } from "./register-actions";

initialState = {
  workerRegister: null,
  workerSubmitcode: "0000",
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case registerActionsTypes.SET_WORKER_REGISTER:
      return { ...state, workerRegister: action.payload };
    case registerActionsTypes.SET_WORKER_SUBMIT_CODE:
      return { ...state, workerSubmitcode: action.payload };
    default:
      return state;
  }
};

export default registerReducer;
