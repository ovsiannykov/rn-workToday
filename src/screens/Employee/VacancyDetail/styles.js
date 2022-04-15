import { StyleSheet, Platform } from "react-native";

import Colors from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Platform.OS == "ios" ? 80 : 40,
  },
  vacancy_info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image_box: {
    width: 38,
    height: 38,
    borderRadius: 12,
    marginRight: 9,
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: 12,
  },
  company_name: {
    fontSize: 14,
    color: Colors.darkBlue,
    fontFamily: "ComfortaaMedium",
    marginBottom: 7,
  },
  time: {
    fontFamily: "Roboto_Regular",
    color: Colors.darkBlue,
    fontSize: 12,
    marginLeft: 3,
  },
  send_icon: {
    marginLeft: 30,
  },
  favorite_icon: {
    marginLeft: 30,
  },
  price: {
    fontFamily: "ComfortaaMedium",
    marginLeft: 3,
    marginRight: 7,
    fontSize: 12,
    color: Colors.darkBlue,
  },
  listItem: {
    fontFamily: "ComfortaaMedium",
    color: Colors.darkBlue,
    fontSize: 12,
    lineHeight: 16,
  },
  sills_box: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: 300,
  },
  buttons_container: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
});
