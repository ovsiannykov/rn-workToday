import { employerTypes } from "./employer-types";

export const setMyVanacies = (payload) => ({
  type: employerTypes.SET_MY_VACANCIES,
  vacancies: payload,
});
