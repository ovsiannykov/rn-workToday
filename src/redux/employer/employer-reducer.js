import { employerTypes } from "./employer-types";

const initialState = {
  vacancies: [],
  categories: [],
  selectLocation: null,
};
export const employerReducer = (state = initialState, action) => {
  switch (action.type) {
    case employerTypes.SET_MY_VACANCIES:
      return { ...state, vacancies: action.data };
    case employerTypes.GET_CATEGORIES:
      return { ...state, categories: action.categories };
    case employerTypes.SET_SELECT_LOCATION:
      return { ...state, selectLocation: action.location };
    default:
      return state;
  }
};
