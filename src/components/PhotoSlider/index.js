import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { useTranslation } from "react-i18next";

import Colors from "../../constants/Colors";
import { API_BASE_URL } from "../../redux/instance";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-y-IJN8glQlf1qoU01dEgGPUa0d1-sjfWg&usqp=CAU",
  //require("./assets/images/girl.jpg"), // Local image
];

const PhotoSlider = (props) => {
  const [photos, setPhotos] = useState(images);
  const { t } = useTranslation();

  useEffect(() => {
    if (props.photos && props.isPreview == null) {
      const arrPhotos = props.photos.map((item) => {
        const fileName = item.split("/").pop();
        return `${API_BASE_URL}static/${fileName}`;
      });
      setPhotos(arrPhotos);
    }
    if (props.isPreview !== null) {
      const arrPhotos = props.photos.map((item) => item);
      setPhotos(arrPhotos);
    }
    //else {
    //   setPhotos(images);
    // }
  }, [props.photos]);

  return (
    <View style={styles.container}>
      {props.hidePhoto && props.hidePhoto == true ? null : (
        <View style={{ height: 219 }}>
          <SliderBox
            images={photos}
            dotColor={Colors.primaryBlue}
            imageLoadingColor={Colors.primaryBlue}
            inactiveDotColor='gray'
            paginationBoxStyle={{ position: "absolute", bottom: -40 }}
            ImageComponentStyle={{
              borderTopLeftRadius: 28,
              borderTopRightRadius: 28,
            }}
          />
        </View>
      )}

      <View style={{ paddingHorizontal: 39, marginTop: 21 }}>
        <Text style={styles.description_title}>
          {t("Worker.VacancyDetail.detail")}
        </Text>
        <Text style={styles.description}>
          {props.info ??
            "This one got an incredible amount of backlash the last time I said it, so I’m going to say it again: a man’s sexuality"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 420,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: 15,
    marginBottom: 40,
  },
  description_title: {
    color: Colors.veryDarkBlue,
    marginTop: 16,
    fontSize: 18,
    fontFamily: "ComfortaaLight",
    textAlign: "left",
  },
  description: {
    marginTop: 16,
    fontFamily: "ComfortaaLight",
    fontSize: 14,
    color: Colors.darkBlue,
  },
});

export default PhotoSlider;
