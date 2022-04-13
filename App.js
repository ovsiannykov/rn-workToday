import React, { useState } from "react";
import { Root } from "./src/Navigation/Root";
import AppLoading from "expo-app-loading";
import { bootstrap } from "./src/bootstrap";
import { AuthContext } from "./src/Navigation/Auth/AuthContext";
import { Provider } from "react-redux";
import store from "./src/redux/store";

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
  return <Root userToken={userToken} />;
};

const AppWrapper = () => {
  const [userToken, setUserToken] = useState(null);
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
  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext}>
        <App userToken={userToken} />
      </AuthContext.Provider>
    </Provider>
  );
};

export default AppWrapper;
