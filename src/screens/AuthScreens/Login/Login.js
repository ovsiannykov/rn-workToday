import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import BigButton from "../../../components/BigButton";
import Input from "../../../components/Input";

const Login = ({ navigation, login, ...props }) => {
  return (
    <View style={styles.loginBox}>
      <Text>Login</Text>
      <BigButton />
      <Input />
    </View>
  );
};

export default Login;
