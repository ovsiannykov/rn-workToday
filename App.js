import React, { useState, useEffect } from "react";
import { Root } from "./src/Navigation/Root";
import AppLoading from "expo-app-loading";
import FlashMessage from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useContext } from "react";

import { bootstrap } from "./src/bootstrap";
import { AuthContext } from "./src/Navigation/Auth/AuthContext";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Colors from "./src/constants/Colors";
import { setTokenInHeaders } from "./src/redux/auth/auth-thunks";

let App = ({ userToken }) => {
  const [isLoading, setIsLoading] = useState(true);
  if (isLoading)
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsLoading(false)}
        onError={(err) => console.log(err)}
      />
    );
  return (
    <>
      <Root userToken={userToken} />
      <FlashMessage
        position='top'
        color='red'
        titleStyle={{ fontFamily: "ComfortaaMedium", fontSize: 14 }}
      />
    </>
  );
};

const AppWrapper = () => {
  const [userToken, setUserToken] = useState(null);
  const [fetching, setFetching] = useState(false);

  const authContext = React.useMemo(() => {
    return {
      signIn: (token) => {
        setUserToken(token);
      },
      signUp: () => {
        setUserToken("asdf");
      },
      signOut: () => {
        setUserToken(null);
      },
    };
  }, []);

  //const context = useContext(AuthContext);

  const findToken = async (context) => {
    setFetching(true);
    const value = await AsyncStorage.getItem("@storage_workerToken");
    if (value !== null) {
      setTokenInHeaders(value);
      setUserToken(value);
      //context.signIn(value);
    }
    setFetching(false);
  };

  useEffect(() => {
    findToken();
  }, []);

  if (fetching) {
    return (
      <LinearGradient
        colors={["#F4F7FF", "#FFFFFF"]}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size='large' color={Colors.primaryBlue} />
      </LinearGradient>
    );
  }

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext}>
        <App userToken={userToken} />
      </AuthContext.Provider>
    </Provider>
  );
};

export default AppWrapper;
