import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./styles";

const Input = (props) => {
  return (
    <View style={styles.inputBox}>
      <Text style={styles.inputLabel}>
        {props.title ? props.title : "Label"}
      </Text>
      <TextInput
        style={styles.TextInput}
        placeholder={props.placeholder ? props.placeholder : null}
        keyboardType={props.keyType ? props.keyType : "default"}
        autoCorrect={props.autoCorrect ? props.autoCorrect : false}
        maxLength={props.maxLength ? props.maxLength : null}
        textContentType={props.textContentType ? props.textContentType : null}
        secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
      />
    </View>
  );
};

export default Input;
