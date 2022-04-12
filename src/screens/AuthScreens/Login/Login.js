import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import BigButton from "../../../components/BigButton";

const Login = ({ navigation, login, ...props }) => {
  return (
    <View style={styles.loginBox}>
      <Text>Login</Text>
      <BigButton />
    </View>
  );
};

export default Login;
