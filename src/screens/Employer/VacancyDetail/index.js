import React from "react";
import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

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

  const data = useSelector((state) => state.employerReducer.selectVacancy);

  const compitensesList = [
    { id: "1", label: "Art", its: undefined },
    { id: "2", label: "Design", its: undefined },
  ];

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <NavigationHeader title={data.Title ?? "Назва вакансії"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 39 }}>
          <View style={{ alignItems: "center" }}>
            <VacancyInfo
              id={data._id}
              type={data.Type}
              place={data.place}
              priceTotal={data.priceTotal}
              pricePerHour={data.pricePerHour}
              company={data.employerId}
              timeStart={data.timeStart}
              timeEnd={data.timeEnd}
              resp={data.responsibilities}
              skills={data.skills}
              item={data}
            />
          </View>
          <Text style={{ marginTop: 20, ...styles.company_name }}>
            Необхідні компетенції:
          </Text>
          <View style={{ marginBottom: 20, ...styles.sills_box }}>
            {data.competencies
              ? data.competencies.map((item) => (
                  <Skill key={item.name} title={item.name} type='worker' />
                ))
              : compitensesList.map((item) => (
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
        <PhotoSlider photos={data.photos} info={data.info} />
      </ScrollView>
    </LinearGradient>
  );
};

export default VacancyDetail;
