import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Platform.OS == "ios" ? 50 : 10,
    paddingHorizontal: 17,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  input_box: {
    width: 350,
  },
});
