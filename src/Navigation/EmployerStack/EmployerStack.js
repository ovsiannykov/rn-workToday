import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reviews from "../../screens/Employer/Reviews";

import EmployerStackStyles from "./EmployerStackStyles";
import Vacancies from "../../screens/Employer/Vacancies";
import CompanyProfile from "../../screens/Employer/CompanyProfile";
import CreateCompany from "../../screens/Employer/CreateCompany";
import VacancyDetail from "../../screens/Employer/VacancyDetail";
import Workers from "../../screens/Employer/Workers";
import CreateVacancy from "../../screens/Employer/CreateVacancy";
import Statistics from "../../screens/Employer/Statistics";

const Stack = createNativeStackNavigator();

const EmployerStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Statistics'
      screenOptions={EmployerStackStyles.screenOptions}
    >
      <Stack.Screen name='Reviews' component={Reviews} />
      <Stack.Screen name='Vacancies' component={Vacancies} />
      <Stack.Screen name='CompanyProfile' component={CompanyProfile} />
      <Stack.Screen name='CreateCompany' component={CreateCompany} />
      <Stack.Screen name='VacancyDetail' component={VacancyDetail} />
      <Stack.Screen name='Workers' component={Workers} />
      <Stack.Screen name='CreateVacancy' component={CreateVacancy} />
      <Stack.Screen name='Statistics' component={Statistics} />
    </Stack.Navigator>
  );
};

export default EmployerStack;
