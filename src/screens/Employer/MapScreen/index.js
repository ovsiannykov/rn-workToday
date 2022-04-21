import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import LongWhiteButton from "../../../components/LongWhiteButton";
import LongBlueButton from "../../../components/LongBlueButton";
import Colors from "../../../constants/Colors";

const MapScreen = (props) => {
  const [selectedLocation, setSelectedLocation] = useState(mapRegion);

  const navigation = useNavigation();

  const selectLocationHandler = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
      latitudeDelta: event.nativeEvent.coordinate.latitude,
      longitudeDelta: event.nativeEvent.coordinate.longitude,
    });
  };

  const mapRegion = {
    latitude: 50.450001,
    longitude: 30.523333,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
      latitudeDelta: selectedLocation.lat,
      longitudeDelta: selectedLocation.lng,
    };
  }

  return (
    <View style={{ height: "100%" }}>
      <MapView
        style={styles.map}
        region={mapRegion}
        onPress={selectLocationHandler}
      >
        {selectedLocation ? (
          <Marker coordinate={markerCoordinates}>
            <MaterialCommunityIcons
              name='map-marker'
              size={36}
              color={Colors.markerBlue}
            />
          </Marker>
        ) : null}
      </MapView>
      <View style={styles.btn_box}>
        <View style={{ width: "48%" }}>
          <LongWhiteButton title='Назад' onPress={() => navigation.goBack()} />
        </View>
        <View style={{ width: "48%" }}>
          <LongBlueButton title='Ok' onPress={() => navigation.goBack()} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    zIndex: 1,
  },
  btn_box: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    zIndex: 999,
    width: 300,
    justifyContent: "space-between",
    alignItems: "center",
    left: "12%",
    right: "50%",
  },
});

export default MapScreen;
