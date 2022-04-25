import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: 164,
    backgroundColor: "white",
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingTop: 23,
    marginTop: 10,
    marginHorizontal: 2,
    marginBottom: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
  },
  content: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: 92,
    height: 84,
    borderRadius: 16,
  },
  title: {
    fontFamily: "ComfortaaSemiBold",
    fontSize: 15,
    color: Colors.primaryBlue,
    fontWeight: "700",
  },
  description: {
    marginTop: 4,
    fontFamily: "ComfortaaRegular",
    fontSize: 14,
    width: 216,
    height: 60,
    color: Colors.veryDarkBlue,
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
  },
  link_title: {
    color: "white",
    fontSize: 12,
    fontFamily: "ComfortaaMedium",
    marginRight: 5,
  },
  sub_content: {
    fontFamily: "ComfortaaMedium",
    color: "#2D4379",
    fontSize: 12,
    marginHorizontal: 5,
  },
  favorite: {
    position: "absolute",
    right: 10,
    top: 16,
  },
  status_box: {
    position: "absolute",
    right: 25,
    top: 22,
  },
});
