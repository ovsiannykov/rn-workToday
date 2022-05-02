import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from '../../screens/AuthScreens/Login/Login';
import OnboardingScreen from '../../screens/AuthScreens/OnboardingScreen';
import SMS from '../../screens/AuthScreens/SMS';


const Stack = createStackNavigator();

export const Authorization = () => {
  const [routName, setRoutName] = useState("Onboarding")


  const isOnboarding = async () => {
     const value = await AsyncStorage.getItem('@isOnboarding')
     if (value == 'true') {
       setRoutName("Login")
     } else {
        setRoutName("Onboarding")
     }
  }

  useEffect(() => {
     isOnboarding()
  }, [])

  if (routName == "Login") {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SMS" component={SMS}/>
      </Stack.Navigator>
    );
  } else {
    return  (
      <Stack.Navigator
        initialRouteName='Onboarding'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
         <Stack.Screen name="Login" component={Login}/>
         <Stack.Screen name="SMS" component={SMS}/>
      </Stack.Navigator>
    );
  }

};
