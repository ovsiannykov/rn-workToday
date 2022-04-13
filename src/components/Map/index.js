import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import MapView from "react-native-maps";

const Map = (props) => {
  return (
    <View style={styles.container}>
    <MapView style={styles.map}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: -50,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  map: {

    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
    position: 'absolute',
    top: 0,
    left: 0
  },
});

export default Map;
