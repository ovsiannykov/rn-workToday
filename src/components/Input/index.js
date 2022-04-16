import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

const Input = (props) => {
  const [text, onChangeText] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.isPassword == true) {
      setShow(true);
    }
  }, []);

  return (
    <View style={styles.inputBox}>
      <Text style={styles.inputLabel}>
        {props.title ? props.title : "Label"}
      </Text>
      <TextInput
        style={styles.TextInput}
        value={props.value ? props.value : text}
        onChangeText={props.onChange ? props.onChange : onChangeText}
        placeholder={props.placeholder ? props.placeholder : null}
        keyboardType={props.keyType ? props.keyType : "default"}
        autoCorrect={props.autoCorrect ? props.autoCorrect : false}
        maxLength={props.maxLength ? props.maxLength : null}
        textContentType={props.textContentType ? props.textContentType : null}
        secureTextEntry={props.secureTextEntry ? props.secureTextEntry : show}
      />
      {props.isPassword == true ? (
        <TouchableOpacity
          style={styles.viewPassBox}
          onPress={() => setShow(!show)}
        >
          <Text style={styles.viewPasswordBtn}>Показати</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Input;
