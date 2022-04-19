import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    //height: 312,
    width: 347,
    borderRadius: 16,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingTop: 23,
    paddingBottom: 11,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0.3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,
    elevation: 1,
  },
  info_box: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: 92,
    height: 84,
    borderRadius: 16,
  },
  name: {
    fontSize: 18,
    color: Colors.veryDarkBlue,
    fontFamily: "ComfortaaLight",
  },
  comment_title: {
    fontSize: 14,
    color: Colors.veryDarkBlue,
    fontFamily: "ComfortaaLight",
    marginTop: 12,
    marginBottom: 4,
  },
  about: {
    fontSize: 14,
    color: Colors.darkBlue,
    fontFamily: "ComfortaaLight",
    width: 215,
    lineHeight: 20,
  },
  vancy_title: {
    fontFamily: "ComfortaaMedium",
    fontSize: 12,
    color: Colors.darkBlue,
  },
  vancy: {
    fontFamily: "ComfortaaMedium",
    fontSize: 12,
    color: Colors.primaryBlue,
    marginLeft: 4,
  },
  accept: {
    fontFamily: "ComfortaaMedium",
    fontSize: 12,
    color: Colors.green,
    marginLeft: 4,
  },
  denied: {
    fontFamily: "ComfortaaMedium",
    fontSize: 12,
    color: Colors.red,
    marginLeft: 4,
  },
  link_btn: {
    width: 87,
    height: 34,
    backgroundColor: Colors.primaryBlue,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 13,
    top: 142,
  },
  link_title: {
    color: "white",
    fontSize: 12,
    fontFamily: "ComfortaaMedium",
    marginRight: 5,
  },
});
