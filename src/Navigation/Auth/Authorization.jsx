import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../screens/AuthScreens/Login/Login';
import OnboardingScreen from '../../screens/AuthScreens/OnboardingScreen';
import SMS from '../../screens/AuthScreens/SMS';


const Stack = createStackNavigator();

export const Authorization = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
      <Stack.Screen name="Login" component={Login}/>
       <Stack.Screen name="SMS" component={SMS}/>
    </Stack.Navigator>
  );
};
