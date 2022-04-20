import React, {useState} from "react";
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import {SCREEN_WIDTH} from "../../styles/mainStyles";
import Colors from "../../constants/Colors";
import {TypographyText} from "../Typography";

// const data = {
//   labels: ["January", "February", "March", "April", "May", "June"],
//   datasets: [
//     {
//       data: [
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//         Math.random() * 100,
//       ],
//     },
//   ],
// };

const Chart = (props) => {
  const [pressedMarker, setPressedMarker] = useState(null)
  let data = [
    20,
    78,
    80,
    70,
    65,
    90,
    71
  ]
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={() => setPressedMarker(null)}>
        <LineChart
          data={{
            datasets: [
              {
                data,
              },
            ],
          }}
          width={SCREEN_WIDTH * 1.4} // from react-native
          height={400}
          style={{marginLeft: -90}}
          onDataPointClick={({value, dataset, getColor}) => {
            setPressedMarker(value)
          }}
          // verticalLabelRotation={50}
          chartConfig={{
            backgroundColor: "#ffff",
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            // backgroundGradientFrom: "#376AED",
            // backgroundGradientTo: "#FDFEFF",
            fillShadowGradientFromOpacity: 1,
            fillShadowGradientFrom: '#376AED',
            fillShadowGradientTo: '#FFFFFF',
            fillShadowGradientToOffset: 0.8,
            fillShadowGradientToOpacity: 0,
            decimalPlaces: 5, // optional, defaults to 2dp
            color: (opacity = 1) => Colors.markerBlue,
            labelColor: (opacity = 0.4) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 22,
            },
            propsForDots: {
              r: "15",
              strokeWidth: "10",
              stroke: 'rgba(255, 255, 255, 0.5)',
              opacity: 0
            },
          }}
          bezier
          withInnerLines={false}
          withOuterLines={false}
          renderDotContent={({x, y, index, indexData}) => {
            return <View style={{marginLeft: x - (index < 2 ? 10 : 3) * index - ((pressedMarker !== null && data.indexOf(pressedMarker) < index) ? 0 : 0) - (data.indexOf(pressedMarker) === index ? 15 : 5),
              top: y - (index < 2 ? 40 : 32) * index - ((pressedMarker !== null && data.indexOf(pressedMarker) < index) ? 36 : 0) - (data.indexOf(pressedMarker) === index ? 35 : 5), width: 50}} key={index}>
              {data.indexOf(pressedMarker) === index && <Text style={styles.marker__label}>23.03</Text>}
              <View style={[styles.marker, {
                width: pressedMarker === indexData ? 50 : 30,
                height: pressedMarker === indexData ? 50 : 30,
              }]}>
                <View style={[styles.marker__inner, {
                  backgroundColor: indexData === pressedMarker ? 'black' : Colors.markerBlue,
                }]}/>
              </View>
            </View>
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },
  marker: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker__inner: {
    width: 10,
    height: 10,
    borderRadius: 50
  },
  marker__label: {
    fontFamily: 'ComfortaaMedium' ,
    textAlign: 'center'
  }
});

export default Chart;
