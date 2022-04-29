import { workerTypes } from "./worker-types";

const initialState = {
  vacancies: [],
  vacancy: null,
  vacancyInfo: null,
  categories: [],
  contracts: [],
  activeWorks: [],
  finishWorks: [],
};
export const workerReducer = (state = initialState, action) => {
  switch (action.type) {
    case workerTypes.SET_VACANCIES:
      return { ...state, vacancies: action.data };
    case workerTypes.SET_VACANCY:
      return { ...state, vacancy: action.vacancy };
    case workerTypes.SET_SELECT_VACANCY:
      return { ...state, vacancy: action.vacancy };
    case workerTypes.SET_VACANCY_INFO:
      return { ...state, vacancyInfo: action.vacancyInfo };
    case workerTypes.SET_FILTER_CATEGORIES:
      return { ...state, categories: action.categories };
    case workerTypes.SET_CONTRACTS:
      return { ...state, contracts: action.contracts };
    case workerTypes.GET_MY_WORK_ACTIVE:
      return { ...state, activeWorks: action.activeWorks };
    case workerTypes.GET_MY_WORK_FINISHED:
      return { ...state, finishWorks: action.finishWorks };
    default:
      return state;
  }
};
