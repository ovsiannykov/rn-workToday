import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import sized from "../../Svg/sized";
import starGoldSvg from "../../assets/icons/star-gold.svg";
import starWhiteSvg from "../../assets/icons/star-white.svg";

const RatingBox = (props) => {
  const [rating, setRating] = useState(4);

  const GoldStar = sized(starGoldSvg, 16, 16);
  const WhiteStar = sized(starWhiteSvg, 16, 16);

  useEffect(() => {
    if (props.rating) {
      setRating(props.rating);
    }
  }, [props.rating]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {rating >= 1 ? <GoldStar /> : <WhiteStar />}
        {rating >= 2 ? <GoldStar /> : <WhiteStar />}
        {rating >= 3 ? <GoldStar /> : <WhiteStar />}
      </View>
      <View style={styles.wrapper}>
        {rating >= 4 ? <GoldStar /> : <WhiteStar />}
        {rating >= 5 ? <GoldStar /> : <WhiteStar />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 67,
    height: 67,
    backgroundColor: Colors.primaryBlue,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.primaryBlue,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default RatingBox;
