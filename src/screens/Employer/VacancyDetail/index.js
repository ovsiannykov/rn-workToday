import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

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

  const navigation = useNavigation();
  const selectVacancy = useSelector(
    (state) => state.employerReducer.selectVacancy
  );

  useEffect(() => {
    if (selectVacancy !== null) {
      setData(selectVacancy);
    }
  }, []);

  const compitensesList = [
    { id: "1", label: "Art", its: undefined },
    { id: "2", label: "Design", its: undefined },
  ];
  console.log(data.photos)
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
