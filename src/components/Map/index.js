import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import MapView, { Marker, Overlay } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import Vacancy from "../Vacancy";

const Map = (props) => {
  const [viewMarker1, setViewMarker1] = useState(false);
  const [viewMarker2, setViewMarker2] = useState(false);
  const [viewMarker3, setViewMarker3] = useState(false);

  const mapRegion = {
    latitude: 50.450001,
    longitude: 30.523333,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView region={mapRegion} style={styles.map}>
        <Marker
          onPress={() => setViewMarker1(!viewMarker1)}
          key={1}
          coordinate={{
            latitude: 50.4472139478322,
            longitude: 30.536182455740377,
          }}
        >
          <MaterialCommunityIcons
            name='map-marker'
            size={36}
            color={!viewMarker1 ? Colors.markerBlue : Colors.yellow}
          />
        </Marker>
        <Marker
          onPress={() => setViewMarker2(!viewMarker2)}
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
          onPress={() => setViewMarker3(!viewMarker3)}
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
        </Marker>
        <Overlay style={styles.vacancy}>
          {viewMarker1 == true ? <Vacancy title='Бармен' /> : null}
          {viewMarker2 == true ? <Vacancy title='Бухгалтер' /> : null}
          {viewMarker3 == true ? <Vacancy title='Юрист' /> : null}
        </Overlay>
      </MapView>
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
    position: "absolute",
    bottom: 130,
    width: 347,
    height: 164,
  },
});

export default Map;
