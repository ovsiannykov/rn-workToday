import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const BigButton = ({ title, style, ...props }) => {
  return (
    <TouchableOpacity style={{ ...styles.btnBox, ...style }} {...props}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BigButton;
