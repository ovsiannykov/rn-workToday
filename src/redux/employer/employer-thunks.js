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
      await dispatch(setMyVanacies(res.data.data));
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

export const vacancyCreate = (values) => async (dispatch) => {
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
    formData.append(
      "responsibilities",
      JSON.stringify(arrObj(values.responsibilities))
    );
    formData.append("skills", JSON.stringify(arrObj(values.skills)));
    formData.append("competencies", JSON.stringify(arrObj(values.compitence)));
    formData.append("info", values.info);
    formData.append("place", values.place);
    formData.append("geo", JSON.stringify(values.geo));
    formData.append("Documents", createFile(values.photo));

    const res = await employerApi.vacancyCreate(formData);

    console.log(res.data);

    if (res.data.status === "Success") {
      showMessage({
        message: "Вакансію успішно створено 👍",
        type: "success",
      });
    } else {
      showMessage({
        message: "Щось пішло не так... Не вдалося створити вакансію 🤷‍♀️",
        type: "danger",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const vacancyUpdate = (values, id) => async (dispatch) => {
  try {
    const arrObj = (str) => {
      const item = str.split(", ").filter((i) => i !== " ");

      return item.map((item) => ({
        name: item,
      }));
    };

    const formData = new FormData();
    formData.append("timeEnd", values.timeEnd);
    formData.append("_id", id);
    formData.append("timeStart", values.timeStart);
    formData.append("Type", values.Type);
    formData.append("pricePerHour", values.sumHour);
    formData.append("priceTotal", values.sumDay);
    formData.append(
      "responsibilities",
      JSON.stringify(arrObj(values.responsibilities))
    );
    formData.append("Title", values.Title);
    formData.append("skills", JSON.stringify(arrObj(values.skills)));
    formData.append("competencies", JSON.stringify(arrObj(values.compitence)));
    formData.append("info", values.info);
    formData.append("place", values.place);
    formData.append("geo", JSON.stringify(values.geo));

    const res = await employerApi.vacancyUpdate(formData);

    if (res.data.status === "Success") {
      showMessage({
        message: "Вакансію успішно оновлено 👍",
        type: "success",
      });
    } else {
      showMessage({
        message: "Щось пішло не так... Не вдалося оновити вакансію 🤷‍♀️",
        type: "danger",
      });
    }
  } catch (error) {
    showMessage({
      message: "Упс... Щось пішло не так",
      type: "danger",
    });
  }
};
