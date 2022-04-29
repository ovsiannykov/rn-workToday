import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const UpluadInput = ({ filename, onChangeFile }) => {
  // const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.3,
    });

    //console.log(result);

    if (!result.cancelled) {
      onChangeFile(result.uri);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage} style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Text style={styles.title}>Вибрати файл</Text>
      </TouchableOpacity>
      <Text style={styles.title}>|</Text>
      <Text
        style={[styles.title, { width: "55%" }]}
        numberOfLines={1}
        ellipsizeMode={"tail"}
      >
        {filename
          ? filename.split("/")[filename.split("/").length - 1]
          : "Файл не вибрано"}
      </Text>
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
    fontSize: Platform.OS == "ios" ? 16 : 12,
    lineHeight: 22,
    fontFamily: "ComfortaaRegular",
  },
});

export default UpluadInput;
