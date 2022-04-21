import React, {createContext, useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Authorization} from './Auth/Authorization';
import {StatusBar} from "react-native";
import {DrawerNavigator} from "./Drawer/DrawerNavigator";
import AuthContext from './Auth/AuthContext'
import EmployerStack from '../Navigation/EmployerStack/EmployerStack'


export const Root = ({userToken}) => {

  return (

    <NavigationContainer>
      <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}/>
       {userToken !== null ? <DrawerNavigator/> : <Authorization/>}
        {/* <EmployerStack /> */}
    </NavigationContainer>
  );
};
