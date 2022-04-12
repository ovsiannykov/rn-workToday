import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../screens/AuthScreens/Login/Login";

const Stack = createStackNavigator();

export const Authorization = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Login" component={Login}/>
    </Stack.Navigator>
  );
};
