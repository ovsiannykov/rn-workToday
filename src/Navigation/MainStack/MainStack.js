import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import MainStackStyles from "./MainStackStyles";
import HomeScreen from "../../screens/Employee/HomeScreen/";
import VacancyDetail from "../../screens/Employee/VacancyDetail";
import Profile from "../../screens/Employee/Profile";
import ContractDetailScreen from "../../screens/Employee/ContractDetailScreen";
import Settings from "../../screens/Employee/Settings";
import Feedback from "../../screens/Employee/Feedback";
import UploadCompetence from "../../screens/Employee/UploadCompetence";
import MarketingAgreements from "../../screens/Employee/MarketingAgreements";
import Questions from "../../screens/Employee/Questions";
import Reviews from "../../screens/Employer/Reviews";
import Vacancies from "../../screens/Employer/Vacancies";
import CompanyProfile from "../../screens/Employer/CompanyProfile";
import CreateCompany from "../../screens/Employer/CreateCompany";
import Workers from "../../screens/Employer/Workers";
import ContractsScreen from "../../screens/Employee/ContractsScreen";
import Statistics from "../../screens/Employee/Statistics";
import FavoritesScreen from "../../screens/Employee/FavoritesScreen";

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
      <MainStack.Screen name={"VacancyDetail"} component={VacancyDetail} />
      <MainStack.Screen
        name={"ContractDetailScreen"}
        component={ContractDetailScreen}
      />
      <MainStack.Screen name={"Settings"} component={Settings} />
      <MainStack.Screen name={"Feedback"} component={Feedback} />
      <MainStack.Screen
        name={"UploadCompetence"}
        component={UploadCompetence}
      />
      <MainStack.Screen
        name={"MarketingAgreements"}
        component={MarketingAgreements}
      />
      <MainStack.Screen name={"Questions"} component={Questions} />
      <MainStack.Screen name='Reviews' component={Reviews} />
      <MainStack.Screen name='Vacancies' component={Vacancies} />
      <MainStack.Screen name='CompanyProfile' component={CompanyProfile} />
      <MainStack.Screen name='CreateCompany' component={CreateCompany} />
      <MainStack.Screen name='Workers' component={Workers} />
      <MainStack.Screen name='Contracts' component={ContractsScreen} />
      <MainStack.Screen name='Statistics' component={Statistics} />
      <MainStack.Screen name='Favorites' component={FavoritesScreen} />
      <MainStack.Screen name='Profile' component={Profile} />
    </MainStack.Navigator>
  );
};
