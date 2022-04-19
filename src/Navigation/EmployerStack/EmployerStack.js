import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reviews from "../../screens/Employer/Reviews";

import EmployerStackStyles from "./EmployerStackStyles";
import Vacancies from "../../screens/Employer/Vacancies";

const Stack = createNativeStackNavigator();

const EmployerStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Vacancies'
      screenOptions={EmployerStackStyles.screenOptions}
    >
      <Stack.Screen name='Reviews' component={Reviews} />
      <Stack.Screen name='Vacancies' component={Vacancies} />
    </Stack.Navigator>
  );
};

export default EmployerStack;
