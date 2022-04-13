import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {sized} from '../../Svg';
import {TabsScreen} from "../Tabs/TabScreen";
import {SCREEN_WIDTH} from "../../styles/mainStyles";

const {Navigator, Screen} = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 0,
          paddingHorizontal: 0,
        },
      }}
    >
      <Screen name="Home" component={TabsScreen} />
    </Navigator>
  );
};


const styles = StyleSheet.create({
  drawer: {
    width: 360,
    maxWidth: Dimensions.get('window').width * 0.8,
  },
});
