import { employerTypes } from "./employer-types";

const initialState = {
  vacancies: [],
  categories: [],
  selectLocation: null,
  selectVacancy: null,
  reviews: null,
};
export const employerReducer = (state = initialState, action) => {
  switch (action.type) {
    case employerTypes.SET_MY_VACANCIES:
      return { ...state, vacancies: action.vacancies };
    case employerTypes.GET_CATEGORIES:
      return { ...state, categories: action.categories };
    case employerTypes.SET_SELECT_LOCATION:
      return { ...state, selectLocation: action.location };
    case employerTypes.SET_SELECT_VACANCY:
      return { ...state, selectVacancy: action.selectVacancy };
    case employerTypes.SET_REVIEWS:
      return { ...state, reviews: action.reviews };
    default:
      return state;
  }
};
