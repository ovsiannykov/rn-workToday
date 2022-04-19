import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reviews from "../../screens/Employer/Reviews";

import EmployerStackStyles from "./EmployerStackStyles";
import Vacancies from "../../screens/Employer/Vacancies";
import CompanyProfile from "../../screens/Employer/CompanyProfile";
import CreateCompany from "../../screens/Employer/CreateCompany";

const Stack = createNativeStackNavigator();

const EmployerStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='CompanyProfile'
      screenOptions={EmployerStackStyles.screenOptions}
    >
      <Stack.Screen name='Reviews' component={Reviews} />
      <Stack.Screen name='Vacancies' component={Vacancies} />
      <Stack.Screen name='CompanyProfile' component={CompanyProfile} />
      <Stack.Screen name='CreateCompany' component={CreateCompany} />
    </Stack.Navigator>
  );
};

export default EmployerStack;
