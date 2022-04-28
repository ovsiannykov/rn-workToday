import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions, Text, Platform } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import Vacancy from "../Vacancy";

const Map = ({ data, ...props }) => {
  const [marker, setMarker] = useState(null);
  const [selectItem, setSelectItem] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    if (data.length > 0) {
      mapRef.current.animateToRegion({
        ...data[0].geo,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, [data]);

  const mapRegion = {
    latitude: 50.450001,
    longitude: 30.523333,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        region={
          data.length > 0
            ? {
                latitude: selectItem ? selectItem.geo.latitude : 50.450001,
                longitude: selectItem ? selectItem.geo.longitude : 30.523333,
                latitudeDelta: selectItem ? 0.008 : 0.5,
                longitudeDelta: selectItem ? 0.008 : 0,
              }
            : mapRegion
        }
        style={styles.map}
        onPress={() => {
          if (marker !== null) {
            setMarker(null);
          }
        }}
      >
        {data.map((item) => (
          <Marker
            coordinate={{
              latitude: +item.geo.latitude,
              longitude: +item.geo.longitude,
            }}
            key={item._id}
            onPress={async () => {
              await setMarker(null);
              setSelectItem(item);
              setMarker(item._id);
            }}
          >
            <MaterialCommunityIcons
              name='map-marker'
              size={36}
              color={marker === item._id ? Colors.yellow : Colors.markerBlue}
            />
          </Marker>
        ))}
      </MapView>
      {marker ? (
        <View style={styles.vacancy}>
          <View style={{ width: 347 }}>
            <Vacancy
              title={selectItem.Title}
              info={selectItem.info}
              id={selectItem._id}
              photos={selectItem.photos}
              priceTotal={selectItem.priceTotal}
              place={selectItem.place}
              timeStart={selectItem.timeStart}
              timeEnd={selectItem.timeEnd}
              item={selectItem}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: -100,
    // alignItems: "center",
    // justifyContent: "center",
    zIndex: 0,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
    position: "absolute",
    top: 0,
    left: 0,
  },
  vacancy: {
    width: "100%",
    position: "absolute",
    bottom: Dimensions.get("window").height - 260,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
});

export default Map;
