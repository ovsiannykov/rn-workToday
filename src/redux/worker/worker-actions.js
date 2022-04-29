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

export const setVacancyInfo = (payload) => ({
  type: workerTypes.SET_VACANCY_INFO,
  vacancyInfo: payload,
});

export const setStepWorker = () => ({
  type: workerTypes.SET_QUESTIONS_STEP,
});

export const setCategoriesFilter = (payload) => ({
  type: workerTypes.SET_FILTER_CATEGORIES,
  categories: payload,
});

export const setContracts = (payload) => ({
  type: workerTypes.SET_CONTRACTS,
  contracts: payload,
});

export const getMyWorkActive = (payload) => ({
  type: workerTypes.GET_MY_WORK_ACTIVE,
  activeWorks: payload,
});

export const getMyWorkFinished = (payload) => ({
  type: workerTypes.GET_MY_WORK_FINISHED,
  finishWorks: payload,
});

export const setWorkerInfo = (payload) => ({
  type: workerTypes.GET_INFO,
  info: payload,
});
