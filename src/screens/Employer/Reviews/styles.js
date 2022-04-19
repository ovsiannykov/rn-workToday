import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Platform.OS == "ios" ? 50 : 10,
  },
  wrapper: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
