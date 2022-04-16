import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

const UpluadInput = (props) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage} style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Text style={styles.title}>Вибрати файл</Text>
      </TouchableOpacity>
      <Text style={styles.title}>|</Text>
      {image ? (
        <Text style={styles.title}>Файл не вибрано</Text>
      ) : (
        <Text style={styles.title}>Файл не вибрано</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 295,
    height: 46,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "ComfortaaRegular",
  },
});

export default UpluadInput;
