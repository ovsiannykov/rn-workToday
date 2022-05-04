import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Platform.OS == "ios" ? 50 : 10,
    paddingHorizontal: 17,
  },
  wrapper: {
    width: "100%",
  },
  input_box: {
    width: "100%",
    paddingBottom: 1,
  },
  noItems: {
    fontFamily: "ComfortaaLight",
    fontSize: 14,
    color: "gray",
    marginTop: 25,
    textAlign: "center",
  },
});
