import { StyleSheet } from "react-native";

import Colors from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#386BED",
  },
  title: {
    color: "white",
    marginTop: 10,
    marginLeft: 32,
    fontSize: 24,
    fontFamily: "ComfortaaLight",
  },
  company_name: {
    color: "white",
    marginTop: 60,
    marginLeft: 32,
    fontSize: 10,
    fontFamily: "Montserrat_Regular",
  },
  content: {
    // height: 600,
    backgroundColor: "white",
    //position: "absolute",
    bottom: -90,
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
  peopleContainer: {
    width: "100%",
    paddingLeft: 32,
    marginTop: 10,
  },
  peopleTitle: {
    fontSize: 18,
    opacity: 0.4,
    fontFamily: "ComfortaaLight",
    lineHeight: 20,
  },
  peopleValue: {
    fontSize: 16,
    marginTop: 5,
    lineHeight: 18,
    fontFamily: "ComfortaaLight",
  },
});
