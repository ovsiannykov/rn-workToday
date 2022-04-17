import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";

import Colors from "../../constants/Colors";

const dates = [
  { id: "1", label: "Охоронець", worked: true },
  { id: "2", label: "Кассир", date: "23.03" },
  { id: "3", label: "Кассир", date: "25.03" },
  { id: "4", label: "Охоронець", date: "28.03" },
  { id: "5", label: "Юрист", date: "30.03" },
  { id: "6", label: "Перукар", date: "02.04" },
];

const StatisticSlider = (props) => {
  const [selectItem, setSelectItem] = useState("4");

  const Item = (props) => {
    if (props.worked == true) {
      return (
        <TouchableOpacity
          onPress={() => setSelectItem(props.id)}
          style={
            props.id === selectItem
              ? styles.item_active_work
              : styles.item_worked
          }
        >
          <Text
            style={
              props.id === selectItem
                ? styles.inWork_title_active
                : styles.title
            }
          >
            {props.title}
          </Text>
          {props.worked == true ? (
            <Text
              style={
                props.id === selectItem
                  ? styles.inWork_active_title
                  : styles.inWork_title
              }
            >
              В роботі
            </Text>
          ) : (
            <Text style={styles.workDate}>{props.date}</Text>
          )}
        </TouchableOpacity>
      );
    }

    if (props.id == selectItem) {
      return (
        <TouchableOpacity
          onPress={() => setSelectItem(props.id)}
          style={styles.item_active}
        >
          <Text style={styles.inWork_title_active}>{props.title}</Text>
          {props.worked == true ? (
            <Text style={styles.inWork_title}>В роботі</Text>
          ) : (
            <Text style={styles.workDate_active}>{props.date}</Text>
          )}
        </TouchableOpacity>
      );
    }

    // if (props.id === selectItem && props.worked === true) {
    //   return (
    //     <TouchableOpacity
    //       onPress={() => setSelectItem(props.id)}
    //       style={styles.item_active_work}
    //     >
    //       <Text style={styles.inWork_title_active}>{props.title}</Text>
    //       {props.worked == true ? (
    //         <Text style={styles.inWork_title}>В роботі</Text>
    //       ) : (
    //         <Text style={styles.workDate_active}>{props.date}</Text>
    //       )}
    //     </TouchableOpacity>
    //   );
    // }

    return (
      <TouchableOpacity
        onPress={() => setSelectItem(props.id)}
        style={styles.item}
      >
        <Text style={styles.title}>{props.title}</Text>
        {props.worked == true ? (
          <Text style={styles.inWork_title}>В роботі</Text>
        ) : (
          <Text style={styles.workDate}>{props.date}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollBar}
        horizontal={true}
        indicatorStyle={{ color: Colors.primaryBlue }}
      >
        {dates.map((item) => (
          <Item
            key={item.id}
            title={item.label}
            worked={item.worked}
            date={item.date}
            id={item.id}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 33.5,
    marginTop: 29,
  },
  scrollBar: {
    padding: 3,
    paddingBottom: 21,
  },
  item: {
    width: 68.47,
    height: 159,
    borderRadius: 50,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    elevation: 1,
    marginRight: 12,
    alignItems: "center",
    marginLeft: 1,
  },
  title: {
    transform: [{ rotate: "270deg" }],
    marginTop: 60,
    marginLeft: Platform.OS == "ios" ? 0 : -5,
    width: 100,
    fontFamily: "ComfortaaLight",
    fontSize: 11.41,
    textAlign: "right",
  },
  inWork_title: {
    position: "absolute",
    bottom: 18,
    fontSize: 10.65,
    fontFamily: "ComfortaaLight",
    color: "#607D7C",
  },
  workDate: {
    position: "absolute",
    bottom: 17,
    fontFamily: "ComfortaaLight",
    fontSize: 16,
  },
  item_worked: {
    width: 68.47,
    height: 159,
    borderRadius: 50,
    marginRight: 12,
    alignItems: "center",
    marginLeft: 1,
    borderStyle: "dashed",
    borderWidth: 0.760766,
    borderColor: "#607D7C",
  },
  item_active: {
    width: 68.47,
    height: 159,
    borderRadius: 50,
    marginRight: 12,
    alignItems: "center",
    marginLeft: 1,
    backgroundColor: Colors.primaryBlue,
  },
  inWork_title_active: {
    transform: [{ rotate: "270deg" }],
    marginTop: 60,
    marginLeft: Platform.OS == "ios" ? 0 : -5,
    width: 100,
    fontFamily: "ComfortaaLight",
    fontSize: 11.41,
    textAlign: "right",
    color: "white",
  },
  workDate_active: {
    position: "absolute",
    bottom: 17,
    fontFamily: "ComfortaaLight",
    fontSize: 16,
    color: "white",
  },
  item_active_work: {
    width: 68.47,
    height: 159,
    borderRadius: 50,
    marginRight: 12,
    alignItems: "center",
    marginLeft: 1,
    backgroundColor: Colors.primaryBlue,
    borderStyle: "dashed",
    borderWidth: 0.760766,
    borderColor: "white",
  },
  inWork_active_title: {
    position: "absolute",
    bottom: 18,
    fontSize: 10.65,
    fontFamily: "ComfortaaLight",
    color: "white",
  },
});

export default StatisticSlider;
