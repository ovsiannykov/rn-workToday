import { Alert } from "react-native";
import { showMessage } from "react-native-flash-message";

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

export const setStep1 = (body, navigation) => async (dispatch) => {
  try {
    const res = await workerApi.step1({
      step1Info: body,
    });

    if (res.status === "Error") {
      Alert.alert(
        "Помилка 😔",
        "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️"
      );
      navigation.goBack();
    }
  } catch (error) {
    console.log(error);
    Alert.alert("Помилка 😔", "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️");
    navigation.goBack();
  }
};

export const setStep2 = (body, navigation) => async (dispatch) => {
  try {
    const res = await workerApi.step2({
      step1Info: body,
    });

    if (res.data.status === "Error") {
      Alert.alert(
        "Помилка 😔",
        "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️"
      );
      navigation.goBack();
    }
  } catch (error) {
    console.log(error);
    Alert.alert("Помилка 😔", "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️");
    navigation.goBack();
  }
};

export const setStep3 = (body, navigation) => async (dispatch) => {
  try {
    const res = await workerApi.step3({
      step1Info: body,
    });

    if (res.data.status === "Error") {
      Alert.alert(
        "Помилка 😔",
        "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️"
      );
      navigation.goBack();
    }
  } catch (error) {
    console.log(error);
    Alert.alert("Помилка 😔", "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️");
    navigation.goBack();
  }
};

export const setStep4 = (body, navigation) => async (dispatch) => {
  try {
    const res = await workerApi.step4({
      step1Info: body,
    });

    if (res.data.status === "Error") {
      Alert.alert(
        "Помилка 😔",
        "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️"
      );
      navigation.goBack();
    }
  } catch (error) {
    console.log(error);
    Alert.alert("Помилка 😔", "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️");
    navigation.goBack();
  }
};

export const setStep5 = (body, navigation) => async (dispatch) => {
  try {
    const res = await workerApi.step5({
      in: "any",
      required: "any",
      description: "any",
      schema: "any",
    });

    if (res.data.status === "Success") {
      showMessage({
        message: "Форму успішно відправлено 🎉",
        type: "success",
      });
      navigation.goBack();
    } else {
      Alert.alert(
        "Помилка 😔",
        "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️"
      );
      navigation.goBack();
    }
  } catch (error) {
    console.log(error);
    Alert.alert("Помилка 😔", "Щось пішло не так. Спробуйте трохи пізніше 🤷‍♀️");
    navigation.goBack();
  }
};
