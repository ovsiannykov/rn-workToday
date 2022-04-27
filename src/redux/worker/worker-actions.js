import { workerTypes } from "./worker-types";

export const setWorkerVanacies = (payload) => ({
  type: workerTypes.SET_VACANCIES,
  data: payload,
});

export const setWorkerVanacy = (payload) => ({
  type: workerTypes.SET_VACANCY,
  vacancy: payload,
});

export const setSelectVacancy = (payload) => ({
  type: workerTypes.SET_SELECT_VACANCY,
  selectVacancy: payload,
});
