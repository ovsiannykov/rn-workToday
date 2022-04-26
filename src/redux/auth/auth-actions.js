import { authTypes } from "./auth-types";

export const setUserId = (payload) => ({type: authTypes.SET_USER_ID, userId: payload})
