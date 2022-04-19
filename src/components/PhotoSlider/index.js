import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

import Colors from "../../constants/Colors";

const images = [
  "https://s3-alpha-sig.figma.com/img/890c/a201/1560ef1fbd2383482d8e70d86bdd574c?Expires=1651449600&Signature=F~tkIufJYpoLUuvIJi8vUuB4rhqOt4hsVhKOnSd1XOuMHsZ3CiOsfjdXvQwaRHxinovKLGCB1Z3PyKgclDRYFojtCOFC0Tm6UcNU-n7P5gIbxbgd9CBrw1FmefRnAulCSx8onOBE2d6TpsSWAEKonu~Letku9~CKN0IOBd07RZ1OzXj8NVtDf6HFXXa6cz8KZofg15bJBaysD6i3yB2up~HVmZcS5ytbK5oPGM~Anu58ST4fvd-F8okDzxPYmOo8p5s0nd9UZFD2yklgT~n7DmXOlTj7k8Hyn3peJjG1xCRj53f5H6tKzD0-MnCwP1RsOuRCjsBZ~WSLHiJB0NX9dw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  //require("./assets/images/girl.jpg"), // Local image
];

const PhotoSlider = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ height: 219 }}>
        <SliderBox
          images={images}
          dotColor={Colors.primaryBlue}
          inactiveDotColor='gray'
          paginationBoxStyle={{ position: "absolute", bottom: -40 }}
          ImageComponentStyle={{
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
          }}
        />
      </View>
      <View style={{ paddingHorizontal: 39, marginTop: 21 }}>
        <Text style={styles.description_title}>Деталі вакансії</Text>
        <Text style={styles.description}>
          {props.description
            ? props.description
            : "This one got an incredible amount of backlash the last time I said it, so I’m going to say it again: a man’s sexuality"}
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
