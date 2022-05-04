import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const Search = (props) => {
  const { t } = useTranslation();

  return (
    <View style={styles.search_box}>
      <Feather name='search' size={20} color='#828282' />
      <TextInput
        style={styles.serach_input}
        placeholder={t("Worker.HomeScreen.search")}
        placeholderStyle={{ fontSize: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search_box: {
    // width: 347,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 50,
    borderRadius: 6,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  serach_input: {
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    width: "100%",
  },
});

export default Search;
