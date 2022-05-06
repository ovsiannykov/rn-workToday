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
    paddingBottom: 100,
  },
  noItems: {
    fontFamily: "ComfortaaLight",
    fontSize: 14,
    color: "gray",
    marginTop: 25,
    textAlign: "center",
  },
});
