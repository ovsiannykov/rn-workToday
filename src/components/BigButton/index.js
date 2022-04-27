import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const BigButton = ({ title, style, ...props }) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (props.disabled) {
      setDisabled(props.disabled);
    }
  }, [props]);

  return (
    <TouchableOpacity
      style={{ ...styles.btnBox, ...style, opacity: !disabled ? 0.8 : "100%" }}
      {...props}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BigButton;
