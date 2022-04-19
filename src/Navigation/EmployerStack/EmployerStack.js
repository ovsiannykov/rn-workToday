import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contracts from "../../screens/Employer/Contracts";

import EmployerStackStyles from "./EmployerStackStyles";

const Stack = createNativeStackNavigator();

const EmployerStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Contracts'
      screenOptions={EmployerStackStyles.screenOptions}
    >
      <Stack.Screen name='Contracts' component={Contracts} />
    </Stack.Navigator>
  );
};

export default EmployerStack;
