import React from 'react';
import {StyleProp, Text, TextStyle, TextProps, StyleSheet} from 'react-native';


export const TypographyText = (props) => {
  const {
    title,
    textColor = 'grey',
    size = 14,
    weight = 'normal',
    font = 'Montserrat',
    transform,
    style,
    ...rest
  } = props;
  const textStyles = [
    {
      color: textColor,
      fontSize: size,
      textTransform: transform,
      fontFamily: font
    }
  ];

  return (
    <Text style={[textStyles, style]} {...rest}>
      {title}
    </Text>
  );
};
