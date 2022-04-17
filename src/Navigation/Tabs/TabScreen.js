import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { ButtonTabBar } from "../../components/ButtonTabBar/ButtonTabBar";
import { MainStackScreen } from "../MainStack/MainStack";
import { StackScreenProps } from "@react-navigation/stack";
import Profile from "../../screens/Employee/Profile";
import FavoritesScreen from "../../screens/Employee/FavoritesScreen";
import ContractsScreen from "../../screens/Employee/ContractsScreen";
import Statistics from "../../screens/Employee/Statistics";

const Tabs = createBottomTabNavigator();
export const TabsScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true,
        tabBarHideOnKeyboard: true,
        keyboardVerticalOffset: -25,
      }}
      tabBar={(props) => <ButtonTabBar {...props} />}
    >
      <Tabs.Screen name='TabsBar' component={MainStackScreen} />
      <Tabs.Screen name='Contracts' component={ContractsScreen} />
      <Tabs.Screen name='Statistics' component={Statistics} />
      <Tabs.Screen name='Favorites' component={FavoritesScreen} />
      <Tabs.Screen name='Profile' component={Profile} />
    </Tabs.Navigator>
  );
};
