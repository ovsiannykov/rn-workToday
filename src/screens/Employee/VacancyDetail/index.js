import React from "react";
import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import styles from "./styles";
import NavigationHeader from "../../../components/NavigationHeader";
import ErrorBlock from "../../../components/ErrorBlock";
import Skill from "../../../components/Skill";
import LongWhiteButton from "../../../components/LongWhiteButton";
import LongBlueButton from "../../../components/LongBlueButton";
import VacancyInfo from "../../../components/VacancyInfo";
import PhotoSlider from "../../../components/PhotoSlider";
import { sendFeedback } from "../../../redux/worker/worker-thunks";

const VacancyDetail = (props) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.workerReducer.vacancyInfo);

  const compitensesList = [
    { id: "1", label: "Art", its: false },
    { id: "2", label: "Design", its: false },
    { id: "3", label: "Culture", its: true },
    { id: "4", label: "Production", its: false },
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
          <ErrorBlock title={t("Worker.VacancyDetail.errorMessage")} />
          <Text style={{ marginTop: 20, ...styles.company_name }}>
            {t("Worker.VacancyDetail.skills")}
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
              onPress={() => navigation.navigate("UploadCompetence")}
              title={t("Worker.VacancyDetail.addSkills")}
            />
            <LongBlueButton
              onPress={
                data.disableFeedback == true
                  ? null
                  : () => dispatch(sendFeedback(data._id))
              }
              title={t("Worker.VacancyDetail.reply")}
            />
          </View>
        </View>
        <PhotoSlider photos={data.photos} info={data.info} />
      </ScrollView>
    </LinearGradient>
  );
};

export default VacancyDetail;
