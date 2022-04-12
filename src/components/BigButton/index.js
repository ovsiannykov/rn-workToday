import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const BigButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.func ? props.func : null}
      style={styles.btnBox}
    >
      <Text style={styles.btnText}>{props.title ? props.title : "Button"}</Text>
    </TouchableOpacity>
  );
};

export default BigButton;
