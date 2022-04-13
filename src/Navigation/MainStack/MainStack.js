import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import MainStackStyles from "./MainStackStyles";
import Profile from "../../screens/Employee/Profile";
import HomeScreen from "../../screens/Employee/HomeScreen/";

const MainStack = createStackNavigator();

export const MainStackScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    let routes = []; // enter routeName in array to hide TabBar
    const routeName = getFocusedRouteNameFromRoute(route);
    navigation.setOptions({ currentRoute: routeName });
    if (routes.indexOf(routeName) !== -1 && routeName !== undefined) {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  }, [navigation, route]);
  return (
    <MainStack.Navigator
      initialRouteName={"Home"}
      screenOptions={MainStackStyles.screenOptions}
    >
      <MainStack.Screen name={"Home"} component={HomeScreen} />
      <MainStack.Screen name={"Profile"} component={Profile} />
    </MainStack.Navigator>
  );
};
