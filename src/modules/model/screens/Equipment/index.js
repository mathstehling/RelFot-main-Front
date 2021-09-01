import React from "react";
import {
  BaseView,
  InsertImageEQP,
  InsertImageLOMB,
  SubTitle,
  LargeButton,
} from "../../../../components";
import logo from "../../../../assets/img/GCT.png";
import { Image } from "./styles";

export const ImageEQPScreen = ({ navigation }) => {
  return (
    <BaseView ml={24} mt={60}>
      <Image source={logo} />
      <SubTitle mt={16} mb={16}>
        Insira as imagens de sinalização:
      </SubTitle>
      <InsertImageEQP onPress={() => navigation.navigate("Camera")} />
      <BaseView mt={16} mb={16}>
        <InsertImageLOMB
          children={"Lomb FX1"}
          onPress={() => navigation.navigate("Camera")}
        />
      </BaseView>
      <InsertImageLOMB
        children={"Lomb FX2"}
        onPress={() => navigation.navigate("Camera")}
      />
      <BaseView mt={16} mb={140}>
        <InsertImageLOMB
          children={"Lomb FX3"}
          onPress={() => navigation.navigate("Camera")}
        />
      </BaseView>
      <LargeButton
        children={"Enviar"}
        onPress={() => navigation.navigate("Finish")}
      />
    </BaseView>
  );
};
