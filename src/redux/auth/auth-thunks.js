import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { authReducer } from "./auth-reducer";
import { authApi } from "./auth-api";
import { setUserId, setUserToken } from "./auth-actions";
import instance from "../instance";

export const setTokenInHeaders = (token) => {
  Object.assign(instance.defaults, { headers: { Authorization: token } });
};

const storeToken = async (value) => {
  try {
    await AsyncStorage.setItem("@storage_workerToken", value);
  } catch (e) {
    console.log(e);
  }
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

export const registerSubmitCode =
  (num, context) => async (dispatch, getState) => {
    const userId = getState();

    try {
      const res = await authApi.registerSubmitCode({
        _id: userId.authReducer.userId.toString(),
        code: num.toString(),
      });

      if (res.data.status === "Success") {
        dispatch(setUserToken(res.data.token));
        setTokenInHeaders(res.data.token);
        storeToken(res.data.token);
        context.signIn(res.data.token);
      } else {
        Alert.alert(res.data.status, res.data.text);
      }
    } catch (e) {
      console.log(e);
    }
  };

export const registerReSendCode = (num) => async (dispatch) => {
  try {
    const res = await authApi.registerReSendCode({
      phone: num.toString(),
    });

    if (res.data.status !== "Success") {
      Alert.alert(res.data.status, res.data.text);
    }
  } catch (error) {
    console.log(error);
  }
};

export const auth = (body, context) => async (dispatch) => {
  try {
    const res = await authApi.auth(body);

    if (res.data.status === "Success") {
      dispatch(setUserToken(res.data.data));
      setTokenInHeaders(res.data.data);
      storeToken(res.data.data);
      context.signIn(res.data.data);
    } else {
      Alert.alert(res.data.status, res.data.text);
    }
  } catch (e) {
    console.log(e);
  }
};
