import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text, Platform } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import Vacancy from "../Vacancy";

const Map = (props) => {
  const [viewMarker1, setViewMarker1] = useState(false);
  const [viewMarker2, setViewMarker2] = useState(false);
  const [viewMarker3, setViewMarker3] = useState(false);
  const [marker, setMarker] = useState();
  const [data, setData] = useState();

  console.log(data);

  const mapRegion = {
    latitude: 50.450001,
    longitude: 30.523333,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, [props]);

  const closeAllMarker = () => {
    if (viewMarker1 || viewMarker2 || viewMarker3) {
      setViewMarker1(false);
      setViewMarker2(false);
      setViewMarker3(false);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        region={mapRegion}
        style={styles.map}
        onPress={closeAllMarker}
      >
        {/* {data.map((item) => (
          <Marker
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            key={item._id}
          >
            <MaterialCommunityIcons
              name='map-marker'
              size={36}
              color={!viewMarker1 ? Colors.markerBlue : Colors.yellow}
            />
          </Marker>
        ))} */}
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

      {viewMarker3 == true ? (
        <View style={styles.vacancy}>
          <View style={{ width: 347 }}>
            <Vacancy title='Кухар' />
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
