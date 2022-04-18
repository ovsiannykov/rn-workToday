import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
    },
  ],
};

const Chart = (props) => {
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={300}
        verticalLabelRotation={50}
        chartConfig={{
          backgroundColor: "#ffff",
          backgroundGradientFrom: "#376AED",
          backgroundGradientTo: "#FDFEFF",
          decimalPlaces: 5, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 71, 204, ${opacity})`,
          labelColor: (opacity = 0.4) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 22,
          },
          propsForDots: {
            r: "10",
            strokeWidth: "2",
            stroke: "#0047CC",
          },
        }}
        bezier
        withInnerLines={false}
        withOuterLines={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },
});

export default Chart;
