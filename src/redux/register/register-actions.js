export const registerActionsTypes = {
  SET_WORKER_REGISTER: "REGISTER.SET_WORKER_REGISTER",
  SET_WORKER_SUBMIT_CODE: "REGISTER.SET_WORKER_SUBMIT_CODE",
};

export const workerRegister = (payload) => ({
  type: registerActionsTypes.SET_WORKER_REGISTER,
  payload,
});

export const workerSubmitCode = (payload) => ({
  type: registerActionsTypes.SET_WORKER_SUBMIT_CODE,
  payload,
});
