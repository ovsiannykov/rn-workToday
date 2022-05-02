import { employerTypes } from "./employer-types";

const initialState = {
  vacancies: [],
  categories: [],
};
export const employerReducer = (state = initialState, action) => {
  switch (action.type) {
    case employerTypes.SET_MY_VACANCIES:
      return { ...state, vacancies: action.data };
    case employerTypes.GET_CATEGORIES:
      return { ...state, categories: action.categories };
    default:
      return state;
  }
};
