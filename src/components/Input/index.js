import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./styles";

const Input = (props) => {
  return (
    <View style={styles.inputBox}>
      <Text style={styles.inputLabel}>Input</Text>
      <TextInput
        style={styles.TextInput}
        placeholder={props.placeholder ? props.placeholder : null}
        keyboardType={props.keyType ? props.keyType : "default"}
      />
    </View>
  );
};

export default Input;
