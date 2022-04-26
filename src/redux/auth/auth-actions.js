import { authTypes } from "./auth-types";

export const workerRegister = (payload) => ({
  type: authTypes.SET_WORKER_REGISTER,
  payload,
});

export const workerSubmitCode = (payload) => ({
  type: authTypes.SET_WORKER_SUBMIT_CODE,
  payload,
});
