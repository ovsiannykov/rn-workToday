import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "ios" ? 50 : 10,
    paddingHorizontal: 14,
  },
  serach_input: {},
});
