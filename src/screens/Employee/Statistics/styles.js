import { StyleSheet } from "react-native";

import Colors from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#386BED",
  },
  title: {
    color: "white",
    marginTop: 60,
    marginLeft: 32,
    fontSize: 24,
    fontFamily: "ComfortaaLight",
  },
  content: {
    // height: 600,
    backgroundColor: "white",
    //position: "absolute",
    bottom: -80,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 11,
  },
  sub_title: {
    marginLeft: 33,
    fontSize: 18,
    fontFamily: "ComfortaaLight",
  },
  status_box: {
    alignItems: "center",
    position: "relative",
    top: -150,
    marginBottom: 60,
  },
});
