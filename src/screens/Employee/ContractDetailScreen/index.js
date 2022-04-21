import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import sized from "../../../Svg/sized";
import downSvg from "../../../assets/icons/down.svg";
import upSvg from "../../../assets/icons/up.svg";
import VacancyInfo from "../../../components/VacancyInfo";
import LongWhiteButton from "../../../components/LongWhiteButton";

const ContractDetailScreen = (props) => {
  const [conract, setContract] = useState(false);
  const [vacancy, setVacancy] = useState(true);

  const DownIcon = sized(downSvg, 22, 22);
  const UpIcon = sized(upSvg, 22, 22);

  const ContractDetai = () => {
    return (
      <View style={styles.contract}>
        <Text style={styles.contract_title}>Контракт з компанією</Text>
        <View style={styles.border} />
        <Text style={styles.contract_subTitle}>Деталі анкети</Text>
        <View style={styles.border} />
        <Text style={styles.contract_text}>
          This one got an incredible amount of backlash the last time I said it,
          so I’m going to say it again: a man’s sexuality is never, ever your
          responsibility, under any circumstances. Whether it’s the fifth date
          or your twentieth year of marriage, the correct determining factor for
          whether or not you have sex with your partner isn’t whether you ought
          to “take care of him” or “put out” because it’s been a while or he’s
          really horny.
        </Text>
        <View style={{ alignItems: "center" }}>
          <LongWhiteButton title='Завантажити контракт' />
        </View>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <Text style={styles.title}>Перегляд контракту</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingBottom: 280 }}
      >
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={() => setContract(!conract)}
            style={styles.button}
          >
            <View style={{ ...styles.button_wrapper }}>
              <Text style={styles.button_text}>Деталі контракту</Text>
            </View>
            {!conract ? <DownIcon /> : <UpIcon />}
          </TouchableOpacity>
          {conract ? (
            <View>
              <ContractDetai />
            </View>
          ) : null}
          <TouchableOpacity
            style={styles.button}
            onPress={() => setVacancy(!vacancy)}
          >
            <View style={{ ...styles.button_wrapper }}>
              <Text style={styles.button_text}>Деталі вакансії</Text>
            </View>
            {!vacancy ? <DownIcon /> : <UpIcon />}
          </TouchableOpacity>
          {vacancy ? (
            <View style={{ alignItems: "center" }}>
              <VacancyInfo />
            </View>
          ) : null}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ContractDetailScreen;
