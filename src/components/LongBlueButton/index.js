import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";

const LongBlueButton = (props) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (props.disabled) {
      setDisabled(true);
    }
  }, [props.disabled]);

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.container}
      disabled={disabled}
    >
      <Text style={disabled ? styles.text_disabled : styles.text}>
        {props.title ? props.title : "Кнопка"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: 299,
    height: 48,
    backgroundColor: Colors.primaryBlue,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.primaryBlue,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.24,
    shadowRadius: 5.86,
    elevation: 18,
  },
  text: {
    color: "white",
    fontFamily: "ComfortaaMedium",
    fontSize: 16,
  },
  text_disabled: {
    color: "white",
    fontFamily: "ComfortaaMedium",
    fontSize: 16,
    opacity: 0.5,
  },
});

export default LongBlueButton;
