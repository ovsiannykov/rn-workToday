import instance from "../instance";

export const authApi = {
  registerStart: (body) => instance.post('/application/registerStart', body)
}
