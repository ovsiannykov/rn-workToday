import { Alert } from "react-native";

import { workerReducer } from "./worker-reducer";
import { workerApi } from "./worker-api";
import { setWorkerVanacies, setWorkerVacancy } from "./worker-actions";
import instance from "../instance";

export const setTokenInHeaders = (token) => {
  Object.assign(instance.defaults, { headers: { Authorization: token } });
};

export const registerStart = (body, navigation, phone) => async (dispatch) => {
  try {
    const res = await authApi.registerStart(body);
    if (res.data.status === "Success") {
      dispatch(setUserId(res.data.data));
      navigation.navigate("SMS", { phone: phone });
    } else {
      Alert.alert(res.data.status, res.data.text);
    }
  } catch (e) {
    console.log(e);
  }
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
