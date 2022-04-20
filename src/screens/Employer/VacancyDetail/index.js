import React from "react";
import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import NavigationHeader from "../../../components/NavigationHeader";
import ErrorBlock from "../../../components/ErrorBlock";
import Skill from "../../../components/Skill";
import LongWhiteButton from "../../../components/LongWhiteButton";
import LongBlueButton from "../../../components/LongBlueButton";
import VacancyInfo from "../../../components/VacancyInfo";
import PhotoSlider from "../../../components/PhotoSlider";

const VacancyDetail = (props) => {
  const route = useRoute();
  const navigation = useNavigation();

  const compitensesList = [
    { id: "1", label: "Art", its: undefined },
    { id: "2", label: "Design", its: undefined },
  ];

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <NavigationHeader title={route.params.title} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 39 }}>
          <View style={{ alignItems: "center" }}>
            <VacancyInfo />
          </View>
          <ErrorBlock title='Ви недостатньо компетентні, щоб прийняти завдання' />
          <Text style={{ marginTop: 20, ...styles.company_name }}>
            Необхідні компетенції:
          </Text>
          <View style={{ marginBottom: 20, ...styles.sills_box }}>
            {compitensesList.map((item) => (
              <Skill key={item.id} title={item.label} isTrue={item.its} />
            ))}
          </View>
          <View style={styles.buttons_container}>
            <LongWhiteButton
              //onPress={() => navigation.navigate("UploadCompetence")}
              title='Змінити деталі вакансії'
            />
            <LongBlueButton
              //onPress={() => navigation.navigate("Questions")}
              title='Переглянути відгуки'
            />
            <LongWhiteButton
              onPress={() => navigation.navigate("Workers")}
              title='Переглянути працівників'
            />
          </View>
        </View>
        <PhotoSlider
          description='This one got an incredible amount of backlash the last time I said it, so I’m going to say it again: a man’s sexuality is never, ever your responsibility, under any circumstances. Whether it’s the fifth date or your twentieth year of marriage, the correct determining factor for whether or not you have sex with your partner isn’t whether you ought to “take care
'
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default VacancyDetail;
