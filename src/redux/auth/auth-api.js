import instance from "../instance";

export const authApi = {
  registerStart: (body) => instance.post("/application/registerStart", body),
  registerSubmitCode: (body) =>
    instance.post("/application/registerSubmitCode", body),
  registerReSendCode: (body) =>
    instance.post("/application/registerReSendCode", body),
};
