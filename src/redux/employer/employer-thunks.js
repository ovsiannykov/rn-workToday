import { Alert } from "react-native";
import { showMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

import instance from "../instance";
import { employerApi } from "./employer-api";
import { createFile } from "../../../utils";
import { setMyVanacies } from "./employer-actions";
import { getCategories } from "./employer-actions";

export const setTokenInHeaders = (token) => {
  Object.assign(instance.defaults, { headers: { Authorization: token } });
};

export const vacancyMy = () => async (dispatch) => {
  try {
    const res = await employerApi.vacancyMy();

    if (res.data.status === "Success") {
      console.log(res.data.data);
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

export const getCategoriesFilters = () => async (dispatch) => {
  try {
    const res = await employerApi.getCategories();
    if (res.data.status === "Success") {
      dispatch(getCategories(res.data.data));
    }
  } catch (error) {
    showMessage({
      message: `${error}`,
      type: "danger",
    });
  }
};

export const vacancyCreate = (values, navigation) => async (dispatch) => {
  try {
    const arrObj = (str) => {
      const item = str.split(", ").filter((i) => i !== " ");

      return item.map((item) => ({
        name: item,
      }));
    };

    const formData = new FormData();

    formData.append("pricePerHour", values.sumHour);
    formData.append("timeEnd", values.timeEnd);
    formData.append("Type", values.Type);
    formData.append("Title", values.Title);
    formData.append("timeStart", values.timeStart);
    formData.append("priceTotal", values.sumDay);
    formData.append("responsibilities", arrObj(values.responsibilities));
    formData.append("skills", arrObj(values.skills));
    formData.append("competencies", arrObj(values.compitence));
    formData.append("info", values.compitence);
    formData.append("place", values.info);
    formData.append("geo", values.geo);
    formData.append("Documents", [values.photo]);

    let body = {
      pricePerHour: values.sumHour,
      timeEnd: values.timeEnd,
      Type: values.Type,
      Title: values.Title,
      timeStart: values.timeStart,
      priceTotal: values.sumDay,
      responsibilities: arrObj(values.responsibilities),
      skills: arrObj(values.skills),
      competencies: arrObj(values.compitence),
      info: values.info,
      place: values.place,
      geo: values.geo,
    };

    const res = await employerApi.vacancyCreate(formData);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
