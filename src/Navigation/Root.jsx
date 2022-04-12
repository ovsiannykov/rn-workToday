import React, {createContext, useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Authorization} from './Authorization';
import {StatusBar} from "react-native";
import {DrawerNavigator} from "./DrawerNavigator";
import {AuthContext} from "./AuthContext";


export const Root = ({userToken}) => {

  return (

    <NavigationContainer>
      <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}/>
      {/* {userToken !== null ? <DrawerNavigator/> : <Authorization/>} */}
       <DrawerNavigator/>
    </NavigationContainer>
  );
};
