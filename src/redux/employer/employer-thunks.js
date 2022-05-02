import { Alert } from "react-native";
import { showMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

import instance from "../instance";
import { employerApi } from "./employer-api";
import { createFile } from "../../../utils";
import { setMyVanacies } from "./employer-actions";

export const setTokenInHeaders = (token) => {
  Object.assign(instance.defaults, { headers: { Authorization: token } });
};

export const vacancyMy = () => async (dispatch) => {
  try {
    const res = await employerApi.vacancyMy();

    if (res.data.status === "Success") {
      dispatch(setMyVanacies(res.data.data));
    } else {
      showMessage({
        message: "Упс... Не вдалося завантажити вакансії 🤷‍♀️",
        type: "danger",
      });
    }
  } catch (error) {
    console.log(error);
    showMessage({
      message: "Щось пішло не так... Перевірте підключення до інтернету",
      type: "danger",
    });
  }
};
