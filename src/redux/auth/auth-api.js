import instance from "../instance";

export const authApi = {
  registerStart: (body) => instance.post("/emloyer/registerStart", body),
  registerSubmitCode: (body) =>
    instance.post("/emloyer/registerSubmitCode", body),
  registerReSendCode: (body) =>
    instance.post("/emloyer/registerReSendCode", body),
  auth: (body) => instance.post("/emloyer/auth", body),
};
