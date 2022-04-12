import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

const Input = (props) => {
  const [text, onChangeText] = useState("");
  return (
    <View style={styles.inputBox}>
      <Text style={styles.inputLabel}>
        {props.title ? props.title : "Label"}
      </Text>
      <TextInput
        style={styles.TextInput}
        value={text}
        onChangeText={onChangeText}
        placeholder={props.placeholder ? props.placeholder : null}
        keyboardType={props.keyType ? props.keyType : "default"}
        autoCorrect={props.autoCorrect ? props.autoCorrect : false}
        maxLength={props.maxLength ? props.maxLength : null}
        textContentType={props.textContentType ? props.textContentType : null}
        secureTextEntry={props.secureTextEntry}
      />
      {props.isPassword == "true" ? (
        <TouchableOpacity
          style={styles.viewPassBox}
          onPress={props.viewPassFunc}
        >
          <Text style={styles.viewPasswordBtn}>Показати</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Input;
