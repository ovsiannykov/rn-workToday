import { Alert } from "react-native";

import { workerReducer } from "./worker-reducer";
import { workerApi } from "./worker-api";
import { setWorkerVanacies, setWorkerVacancy } from "./worker-actions";
import instance from "../instance";

export const setTokenInHeaders = (token) => {
  Object.assign(instance.defaults, { headers: { Authorization: token } });
};

export const vacanciesWorkerThunk = (geo, searchText) => async (dispatch) => {
  try {
    const res = await workerApi.workerVacancies({
      geo: geo,
      searchText: searchText,
      startDate: null,
      endDate: null,
    });

    if (res.data.status === "Success") {
      dispatch(setWorkerVanacies(res.data.data));
    }
  } catch (error) {
    console.log(error);
  }
};
