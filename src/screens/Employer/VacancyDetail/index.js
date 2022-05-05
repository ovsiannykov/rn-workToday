import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import styles from "./styles";
import NavigationHeader from "../../../components/NavigationHeader";
import Skill from "../../../components/Skill";
import LongWhiteButton from "../../../components/LongWhiteButton";
import LongBlueButton from "../../../components/LongBlueButton";
import VacancyInfo from "../../../components/VacancyInfo";
import PhotoSlider from "../../../components/PhotoSlider";

const initialVac = {
  Title: "React developer",
  Type: "remote",
  _id: "62696118be6c7d2cc4f86032",
  competencies: [{ name: "Art" }, { name: "Design" }],
  createdAt: "2022-04-27T15:28:24.753Z",
  employerId: "62696086be6c7d2cc4f86024",
  geo: {
    latitude: "50.427252",
    longitude: "30.154871",
  },
  info: 'Оутсорс компания разработки сайтов и мобильных Приложений "Axios"',
  photos: ["16510733047490office1.jpg", "16510733047491office2.jpg"],
  place: "ул. Украиснкая, 24/33",
  pricePerHour: 70,
  priceTotal: 560,
  responsibilities: [
    {
      name: "Разрабатывать сайты",
    },
    {
      name: "Разрабатывать мобильные приложения",
    },
  ],
  skills: [
    {
      name: "Коммуникабельность",
    },
    {
      name: "Умение работать в команде",
    },
    {
      name: "React",
    },
    {
      name: "Redux",
    },
  ],
  status: "active",
  timeEnd: "25.02.2022",
  timeStart: "15.03.2022",
  updatedAt: "2022-04-27T15:28:24.753Z",
};

const VacancyDetail = (props) => {
  const [data, setData] = useState(initialVac);
  const [preview, setPreview] = useState(false);

  const { t } = useTranslation();
  const navigation = useNavigation();
  const selectVacancy = useSelector(
    (state) => state.employerReducer.selectVacancy
  );

  useEffect(() => {
    if (selectVacancy !== null) {
      setData(selectVacancy);
    }
  }, []);

  useEffect(() => {
    if (data && data.isPreview == true) {
      setPreview(true);
    }
  }, [data.isPreview]);

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
            {t("Worker.VacancyDetail.skills")}
          </Text>
          <View style={{ marginBottom: 20, ...styles.sills_box }}>
            {data.competencies
              ? data.competencies.map((item) => (
                  <Skill key={item.name} title={item.name} type='employer' />
                ))
              : compitensesList.map((item) => (
                  <Skill key={item.id} title={item.label} isTrue={item.its} />
                ))}
          </View>
          <View style={styles.buttons_container}>
            {preview == false ? (
              <>
                <LongWhiteButton
                  onPress={() =>
                    navigation.navigate("CreateVacancy", { id: data._id })
                  }
                  title={t("Worker.VacancyDetail.changeDetail")}
                />
                <LongBlueButton
                  //onPress={() => navigation.navigate("Questions")}
                  title={t("Worker.VacancyDetail.seeReviews")}
                />
                <LongWhiteButton
                  onPress={() => navigation.navigate("Workers")}
                  title={t("Worker.VacancyDetail.seeWorkers")}
                />
              </>
            ) : null}
          </View>
        </View>
        <PhotoSlider
          preview={data.isPreview}
          photos={data.photos}
          info={data.info}
          isPreview={data.isPreview ? data.isPreview : null}
        />
      </ScrollView>
    </LinearGradient>
  );
};

export default VacancyDetail;
