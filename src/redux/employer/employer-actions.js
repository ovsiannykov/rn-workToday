import { employerTypes } from "./employer-types";

export const setMyVanacies = (payload) => ({
  type: employerTypes.SET_MY_VACANCIES,
  vacancies: payload,
});

export const getCategories = (payload) => ({
  type: employerTypes.GET_CATEGORIES,
  categories: payload,
});

export const setSelectLocation = (payload) => ({
  type: employerTypes.SET_SELECT_LOCATION,
  location: payload,
});

export const setSelectVacancy = (payload) => ({
  type: employerTypes.SET_SELECT_VACANCY,
  selectVacancy: payload,
});

export const setReviews = (payload) => ({
  type: employerTypes.SET_REVIEWS,
  reviews: payload,
});
