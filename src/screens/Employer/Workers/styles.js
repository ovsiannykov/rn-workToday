import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Platform.OS == "ios" ? 50 : 10,
    // paddingHorizontal: 17,
  },
  wrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  input_box: {
    width: "100%",
  },
});
