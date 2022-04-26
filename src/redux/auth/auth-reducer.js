import { authTypes } from "./auth-types";

const initialState = {
  userId: null
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SET_USER_ID: return {...state, userId: action.userId}
    default:
      return state;
  }
};
