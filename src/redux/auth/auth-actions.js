import { authTypes } from "./auth-types";

export const setUserId = (payload) => ({
  type: authTypes.SET_USER_ID,
  userId: payload,
});

export const setUserToken = (payload) => ({
  type: authTypes.SET_USER_TOKEN,
  token: payload,
});
