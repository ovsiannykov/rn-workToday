import React, {useState, useEffect, useRef} from "react";
import {View, StyleSheet, Dimensions, Text, Platform} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import Vacancy from "../Vacancy";

const Map = ({data, ...props}) => {
  const [marker, setMarker] = useState(null);
  const mapRef = useRef()

  useEffect(() => {
    if (data.length > 0) {
      mapRef.current.animateToRegion({
        ...data[0].geo,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })
    }
  }, [data])

  const mapRegion = {
    latitude: 50.450001,
    longitude: 30.523333,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const closeAllMarker = () => {
    setMarker(null)
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        region={data.length > 0 ? {
          latitude: +data[0].geo?.latitude,
          longitude: +data[0].geo?.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        } : mapRegion}
        style={styles.map}
        onPress={closeAllMarker}
      >
        {data.map((item) => (
          <Marker
            coordinate={{
              latitude: +item.geo.latitude,
              longitude: +item.geo.longitude,
            }}
            key={item._id}
            onPress={() => setMarker(item._id)}
          >
            <MaterialCommunityIcons
              name='map-marker'
              size={36}
              color={marker === item._id ? Colors.yellow : Colors.markerBlue}
            />
          </Marker>
        ))}
        {/* <Marker
          onPress={() => {
            setViewMarker2(!viewMarker2);
            setViewMarker1(false);
            setViewMarker3(false);
          }}
          key={2}
          coordinate={{
            latitude: 50.429970987937644,
            longitude: 30.537543204818096,
          }}
        >
          <MaterialCommunityIcons
            name='map-marker'
            size={36}
            color={!viewMarker2 ? Colors.markerBlue : Colors.yellow}
          />
        </Marker>
        <Marker
          onPress={() => {
            setViewMarker3(!viewMarker3);
            setViewMarker1(false);
            setViewMarker2(false);
          }}
          key={3}
          coordinate={{
            latitude: 50.43979132001462,
            longitude: 30.52438765864783,
          }}
        >
          <MaterialCommunityIcons
            name='map-marker'
            size={36}
            color={!viewMarker3 ? Colors.markerBlue : Colors.yellow}
          />
        </Marker> */}
      </MapView>

      {marker &&
      <View style={styles.vacancy}>
        <View style={{width: 347}}>
          <Vacancy title='Кухар'/>
        </View>
      </View>}
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
