import { Alert } from "react-native";
import { showMessage } from "react-native-flash-message";

import { workerReducer } from "./worker-reducer";
import { workerApi } from "./worker-api";
import {
  setWorkerVanacies,
  setWorkerVacancy,
  setCategoriesFilter,
} from "./worker-actions";
import instance from "../instance";
import {createFile} from "../../../utils";

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
      step2Info: body,
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
      step3Info: body,
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
      step4Info: body,
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
    const formData = new FormData()
    formData.append('step5Info', body.method)

    formData.append('Documents', createFile(body.passport1))
    formData.append('Documents', createFile(body.passport2))
    formData.append('Documents', createFile(body.polandCard1))
    formData.append('Documents', createFile(body.polandCard2))

    const res = await workerApi.step5(formData);
    console.log(res.data)
    if (res.data.status === "Success") {
      showMessage({
        message: "Форму успішно відправлено 🎉",
        type: "success",
      });
      navigation.goBack()
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

export const getCategories = () => async (dispatch) => {
  try {
    const res = await workerApi.getCategories();
    if (res.data.status === "Success") {
      dispatch(setCategoriesFilter(res.data.data));
    } else {
      Alert.alert(res.data.status, res.data.text);
    }
  } catch (error) {
    console.log(error);
  }
};
