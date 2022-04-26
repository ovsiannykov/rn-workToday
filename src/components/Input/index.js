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
  }, [props]);

  return (
    <View style={styles.inputBox}>
      <Text style={styles.inputLabel}>
        {props.title ? props.title : "Label"}
      </Text>
      <TextInput
        style={styles.TextInput}
        value={props.value}
        onChangeText={props.onChange}
        placeholder={props.placeholder ? props.placeholder : null}
        keyboardType={props.keyType ? props.keyType : "default"}
        autoCorrect={props.autoCorrect ? props.autoCorrect : false}
        maxLength={props.maxLength ? props.maxLength : null}
        textContentType={props.textContentType ? props.textContentType : null}
        secureTextEntry={props.secureTextEntry ? props.secureTextEntry : show}
        error={props.error}
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
