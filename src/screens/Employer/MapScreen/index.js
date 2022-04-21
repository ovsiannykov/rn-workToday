import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import LongWhiteButton from "../../../components/LongWhiteButton";
import LongBlueButton from "../../../components/LongBlueButton";
import Colors from "../../../constants/Colors";

const MapScreen = (props) => {
  const [isFetching, setIsFetching] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(mapRegion);

  const navigation = useNavigation();

  const GetCurrentLocation = async () => {
    setIsFetching(true);
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Упс...",
        "Дозвольте програмі використовувати службу локації",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      setSelectedLocation(coords);
    } else {
      Alert.alert("Щось пішло не так...", "Не вдалося знайти місцезнаходження");
    }
    setIsFetching(false);
  };

  const selectLocationHandler = (event) => {
    setSelectedLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
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
      latitude: selectedLocation.latitude,
      longitude: selectedLocation.longitude,
      latitudeDelta: 0.001332,
      longitudeDelta: 0.001331,
    };
  }

  return (
    <View style={{ height: "100%" }}>
      <MapView
        style={styles.map}
        region={selectedLocation ? markerCoordinates : mapRegion}
        onPress={selectLocationHandler}
        provider={PROVIDER_GOOGLE}
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
      <TouchableOpacity
        style={styles.location_btn}
        onPress={GetCurrentLocation}
      >
        {isFetching ? (
          <ActivityIndicator size='small' color='#0000ff' />
        ) : (
          <FontAwesome name='location-arrow' size={28} color={Colors.blue} />
        )}
      </TouchableOpacity>
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
  location_btn: {
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 220,
    position: "absolute",
    zIndex: 999,
    width: 44,
    height: 44,
    backgroundColor: "white",
    borderRadius: 12,
  },
});

export default MapScreen;
