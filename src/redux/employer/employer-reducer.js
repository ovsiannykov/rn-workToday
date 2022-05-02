import { employerTypes } from "./employer-types";

const initialState = {
  vacancies: [],
};
export const employerReducer = (state = initialState, action) => {
  switch (action.type) {
    case employerTypes.SET_MY_VACANCIES:
      return { ...state, vacancies: action.data };
    default:
      return state;
  }
};
