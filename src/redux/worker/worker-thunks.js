import { Alert } from "react-native";
import { showMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { workerReducer } from "./worker-reducer";
import { workerApi } from "./worker-api";
import {
  setWorkerVanacies,
  setWorkerVacancy,
  setCategoriesFilter,
  setContracts,
  getMyWorkActive,
  getMyWorkFinished,
  setWorkerInfo,
  addFavorites,
} from "./worker-actions";
import instance from "../instance";
import { createFile } from "../../../utils";

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
    showMessage({
      message: "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️",
      type: "danger",
    });
  }
};

export const setStep1 = (body, navigation) => async (dispatch) => {
  try {
    const res = await workerApi.step1({
      step1Info: body,
    });

    if (res.data.status === "Success") {
      AsyncStorage.setItem("@questions", "1");
    }

    if (res.status === "Error") {
      showMessage({
        message: "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️",
        type: "danger",
      });
      navigation.goBack();
    }
  } catch (error) {
    console.log(error);
    showMessage({
      message: "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️",
      type: "danger",
    });
    navigation.goBack();
  }
};

export const setStep2 = (body, navigation) => async (dispatch) => {
  try {
    const res = await workerApi.step2({
      step2Info: body,
    });

    if (res.data.status === "Success") {
      AsyncStorage.setItem("@questions", "2");
    }

    if (res.data.status === "Error") {
      showMessage({
        message: "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️",
        type: "danger",
      });
      navigation.goBack();
    }
  } catch (error) {
    console.log(error);
    showMessage({
      message: "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️",
      type: "danger",
    });
    navigation.goBack();
  }
};

export const setStep3 = (body, navigation) => async (dispatch) => {
  try {
    const res = await workerApi.step3({
      step3Info: body,
    });

    if (res.data.status === "Success") {
      AsyncStorage.setItem("@questions", "3");
    }

    if (res.data.status === "Error") {
      showMessage({
        message: "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️",
        type: "danger",
      });
      navigation.goBack();
    }
  } catch (error) {
    console.log(error);
    showMessage({
      message: "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️",
      type: "danger",
    });
    navigation.goBack();
  }
};

export const setStep4 = (body, navigation) => async (dispatch) => {
  try {
    const res = await workerApi.step4({
      step4Info: body,
    });

    if (res.data.status === "Success") {
      AsyncStorage.setItem("@questions", "4");
    }

    if (res.data.status === "Error") {
      showMessage({
        message: "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️",
        type: "danger",
      });
      navigation.goBack();
    }
  } catch (error) {
    console.log(error);
    showMessage({
      message: "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️",
      type: "danger",
    });
    navigation.goBack();
  }
};

export const setStep5 = (body, navigation) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("step5Info", body.method);

    formData.append("Documents", createFile(body.passport1));
    formData.append("Documents", createFile(body.passport2));
    formData.append("Documents", createFile(body.polandCard1));
    formData.append("Documents", createFile(body.polandCard2));

    const res = await workerApi.step5(formData);
    if (res.data.status === "Success") {
      await AsyncStorage.setItem("@questions", "5");
      showMessage({
        message: "Форму успішно відправлено 🎉",
        type: "success",
      });
      navigation.goBack();
    } else {
      showMessage({
        message: "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️",
        type: "danger",
      });
      navigation.goBack();
    }
  } catch (error) {
    console.log(error);
    showMessage({
      message: "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️",
      type: "danger",
    });
    navigation.goBack();
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const res = await workerApi.getCategories();
    if (res.data.status === "Success") {
      dispatch(setCategoriesFilter(res.data.data));
    } else {
      showMessage({
        message: `${res.data.text}`,
        type: "danger",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getLoadCompetitions = (body, type) => async (dispatch) => {
  try {
    const formData = new FormData();

    formData.append("Documents", createFile(body.file));
    formData.append("type", type);
    formData.append("time", body.date ?? "infinity");

    const res = await workerApi.getLoadCompetitions(formData);

    if (res.data.status !== "Success") {
      showMessage({
        message: "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️",
        type: "danger",
      });
    }
  } catch (error) {
    console.log(error);
    showMessage({
      message: "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️",
      type: "danger",
    });
  }
};

export const getFeedback = (body) => async (dispatch) => {
  try {
    const res = await workerApi.getFeedback({ type: body });
    if (res.data.status === "Success") {
      dispatch(setContracts(res.data.data));
    } else {
      showMessage({
        message: "Не вдалося завантажити контракти",
        type: "danger",
      });
    }
  } catch (error) {
    console.log(error);
    showMessage({
      message: "Не вдалося завантажити контракти 😔",
      type: "danger",
    });
  }
};

export const sendFeedback = (id) => async (dispatch) => {
  try {
    const res = await workerApi.sendFeedback({ _id: id });
    if (res.data.status === "Success") {
      showMessage({
        message: "Заявку надіслано ✅",
        type: "success",
      });
    } else {
      showMessage({
        message: "Упс... Не вдалося відправити заявку",
        type: "danger",
      });
    }
  } catch (error) {
    console.log(error);
    showMessage({
      message: "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️",
      type: "danger",
    });
  }
};

export const getMyWork = () => async (dispatch) => {
  try {
    const res = await workerApi.getMyWork();

    console.log(res.data);
    if (res.data.status === "Success") {
      dispatch(getMyWorkActive(res.data.active));
      dispatch(getMyWorkFinished(res.data.finished));
    } else {
      showMessage({
        message: "Не вдалося завантажити ваші роботи 😔",
        type: "danger",
      });
    }
  } catch (error) {
    console.log(error);
    showMessage({
      message: "Не вдалося завантажити ваші роботи 😔",
      type: "danger",
    });
  }
};

export const getInfo = () => async (dispatch) => {
  try {
    const res = await workerApi.getInfo();

    if (res.data.status === "Success") {
      dispatch(setWorkerInfo(res.data.data));
    }
  } catch (error) {
    console.log(error);
  }
};

export const startMyWork = (id) => async (dispatch) => {
  try {
    const res = await workerApi.startMyWork({ _id: id });
    if (res.data.status !== "Success") {
      showMessage({
        message: "Упс... Не вдалося розпочати роботу",
        type: "danger",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const endMyWork = (id, time) => async (dispatch) => {
  try {
    const res = await workerApi.endMyWork({ schema: { _id: id, time: time } });
    if (res.data.status !== "Success") {
      showMessage({
        message: "Упс... Не вдалося завершити роботу",
        type: "danger",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addFavorite = (item) => async (dispatch) => {
  let favoritesList = [];
  const value = await AsyncStorage.getItem("@favorites");
  if (value !== null) {
    const result = JSON.parse(value);
    favoritesList = result;
  }

  await favoritesList.push(item);
  const result = await JSON.stringify(favoritesList);
  await AsyncStorage.setItem("@favorites", result);
  dispatch(addFavorites(favoritesList));
};

export const getFavorites = () => async (dispatch) => {
  const value = await AsyncStorage.getItem("@favorites");
  if (value !== null) {
    const result = JSON.parse(value);
    dispatch(addFavorites(result));
  }
};

export const deleteFavorite = (id) => async (dispatch) => {
  let favoritesList = [];
  const value = await AsyncStorage.getItem("@favorites");
  if (value !== null) {
    const result = JSON.parse(value);
    favoritesList = result;
  }
  const newFavorites = favoritesList.filter((item) => item._id !== id);
  dispatch(addFavorites(newFavorites));
  const resultJson = await JSON.stringify(newFavorites);
  await AsyncStorage.setItem("@favorites", resultJson);
};
