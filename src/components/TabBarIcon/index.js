import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-vector-icons/Icon";

const TabBarIcon = (props) => {
  <View>
    <Icon name={props.name} size={props.size} color={props.color} />
  </View>;
};

export default TabBarIcon;
